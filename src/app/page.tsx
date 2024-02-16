"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23794d8a&color2=%23855620&color3=%23210903&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"
        />
      </ShaderGradientCanvas>

      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
        <div className="flex gap-2">
          <a href="https://docs.google.com/document/d/e/2PACX-1vQ6dCwjT2_DQlrqLTHzQ1y9ifr4RjIh2DdS7W_rLqazTG4_loUPBAzccSUuqxAnBQ/pub" target="_blank">
            Currículo
          </a>
          <a href="https://www.linkedin.com/in/adryellcabral/" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/AdryellCabral" target="_blank">
            Github
          </a>
        </div>

        <a
          className="bg-slate-100 bg-opacity-20 px-2 py-1 rounded-xl"
          href="mailto:adyellcabral.dev@outlook.com"
          target="_blank"
        >
          Vamos trabalhar juntos!
        </a>
      </div>

      <div className="fixed bottom-0 left-0 p-4 flex justify-between w-full">
        <h1>Adryell Cabral</h1>

        <div className="flex gap-3">
          <h2>Desenvolvedor Back-end</h2>
          <h2>Belo Horizonte</h2>
        </div>
      </div>

    </div>
  );
}
