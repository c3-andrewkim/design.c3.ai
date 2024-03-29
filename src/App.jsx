import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import Sticky from 'sticky-js';

import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PageNotFound from './pages/PageNotFound';


function App() {

  const location = useLocation();
  
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');

    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''

     /*
      Most of the stuff in here is just bootstrapping. Essentially it's just
      setting ThreeJS up so that it renders a flat surface upon which to draw 
      the shader. The only thing to see here really is the uniforms sent to 
      the shader. Apart from that all of the magic happens in the HTML view
      under the fragment shader.
      */

      let container;
      let camera, scene, renderer;
      let uniforms;

      let divisor = 1 / 8;
      let textureFraction = 1 / 1;

      let w = 2048;
      let h = 1024;

      let newmouse = {
        x: 0,
        y: 0
      };

      let loader=new THREE.TextureLoader();
      let texture, rtTexture, rtTexture2;
      loader.setCrossOrigin("anonymous");
      loader.load(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
        function do_something_with_texture(tex) {
          texture = tex;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.minFilter = THREE.LinearFilter;
          init();
          animate();
        }
      );

      function init() {
        container = document.getElementById( 'starfall' );

        camera = new THREE.Camera();
        camera.position.z = 1;

        scene = new THREE.Scene();

        var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
        
        rtTexture = new THREE.WebGLRenderTarget(window.innerWidth * textureFraction, window.innerHeight * textureFraction);
        rtTexture2 = new THREE.WebGLRenderTarget(window.innerWidth * textureFraction, window.innerHeight * textureFraction);

        uniforms = {
          u_time: { type: "f", value: 1.0 },
          u_resolution: { type: "v2", value: new THREE.Vector2() },
          u_noise: { type: "t", value: texture },
          u_buffer: { type: "t", value: rtTexture.texture },
          u_mouse: { type: "v3", value: new THREE.Vector3() },
          u_frame: { type: "i", value: -1. },
          u_renderpass: { type: 'b', value: false }
        };

        var material = new THREE.ShaderMaterial( {
          uniforms: uniforms,
          vertexShader: document.getElementById( 'vertexShader' ).textContent,
          fragmentShader: document.getElementById( 'fragmentShader' ).textContent
        } );
        material.extensions.derivatives = true;

        var mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );

        container.appendChild( renderer.domElement );

        // window.addEventListener('DOMContentLoaded', (event) => {
        //     console.log('DOM fully loaded and parsed');
            onWindowResize();
        // });
        window.addEventListener( 'resize', onWindowResize, false );
        

        document.addEventListener('pointermove', (e)=> {
          let ratio = window.innerHeight / window.innerWidth;
          if(window.innerHeight > window.innerWidth) {
            newmouse.x = (e.pageX - window.innerWidth / 2) / window.innerWidth;
            newmouse.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1 * ratio;
          } else {
            newmouse.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
            newmouse.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;
          }
          
          e.preventDefault();
        });
          document.addEventListener('pointerdown', (e)=> {
            if(e.button === 0) {
              uniforms.u_mouse.value.z = 1;
            } else if (e.button === 2) {
              uniforms.u_mouse.value.w = 1;
            }
            e.preventDefault();
          });
          document.addEventListener('pointerup', (e)=> {
            if(e.button === 0) {
              uniforms.u_mouse.value.z = 0;
            } else if (e.button === 2) {
              uniforms.u_mouse.value.w = 0;
            }
            e.preventDefault();
          });
      }

      function onWindowResize( event ) {
        w = 2048;
        h = 1024;
        const heroSection = document.getElementById('hero-section');
        w = heroSection.offsetWidth;
        h = heroSection.offsetHeight;
        // console.log(w, h);
        
        renderer.setSize( w, h );
        uniforms.u_resolution.value.x = renderer.domElement.width;
        uniforms.u_resolution.value.y = renderer.domElement.height;
        
        uniforms.u_frame.value = 0;
        
        rtTexture = new THREE.WebGLRenderTarget(w * textureFraction, h * textureFraction);
        rtTexture2 = new THREE.WebGLRenderTarget(w * textureFraction, h * textureFraction);
      }

      function animate(delta) {
        requestAnimationFrame( animate );
        render(delta);
      }




      let then = 0;
      function renderTexture(delta) {
        // let ov = uniforms.u_buff.value;
        
        let odims = uniforms.u_resolution.value.clone();
        uniforms.u_resolution.value.x = w * textureFraction;
        uniforms.u_resolution.value.y = h * textureFraction;

        uniforms.u_buffer.value = rtTexture2.texture;
        
        uniforms.u_renderpass.value = true;
        
      //   rtTexture = rtTexture2;
      //   rtTexture2 = buffer;
        
        window.rtTexture = rtTexture;
        renderer.setRenderTarget(rtTexture);
        renderer.render( scene, camera, rtTexture, true );
        
        let buffer = rtTexture
        rtTexture = rtTexture2;
        rtTexture2 = buffer;

        // uniforms.u_buff.value = ov;

        uniforms.u_buffer.value = rtTexture.texture;
        uniforms.u_resolution.value = odims;
        uniforms.u_renderpass.value = false;
      }
      function render(delta) {
        uniforms.u_frame.value++;
        
        uniforms.u_mouse.value.x += ( newmouse.x - uniforms.u_mouse.value.x ) * divisor;
        uniforms.u_mouse.value.y += ( newmouse.y - uniforms.u_mouse.value.y ) * divisor;
        
        uniforms.u_time.value = delta * 0.00015;  // NOTE: this is how you slow down the speed
        renderer.render( scene, camera );
        renderTexture();
      }


  }, [location.pathname]); // triggered on route change


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
