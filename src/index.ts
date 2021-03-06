import Engine from "./core/engine";
import Node from "./core/node";
import Scene from "./scene/scene";
import GL from "./core/gl";

import Buffer from "./buffer/buffer";
import BufferView from "./buffer/buffer-view";
import ElementBuffer from "./buffer/element-buffer";
import ElementBufferView from "./buffer/element-buffer-view";
import CubeTexture from "./texture/cube-texture";
import Texture from "./texture/texture";

import BaseOrthographicCamera from "./camera/base-orthographic-camera";
import BasePerspectiveCamera from "./camera/base-perspective-camera";
import RotateOrthographicCamera from "./camera/rotate-orthographic-camera";
import RotatePerspectiveCamera from "./camera/rotate-perspective-camera";
import Skybox from "./scene/skybox";

import AmbientLight from "./light/ambient-light";
import DirectionalLight from "./light/directional-light";
import PointLight from "./light/point-light";

import LineMesh from "./mesh/line-mesh";
import Mesh from "./mesh/mesh";

import Geometry from "./geometry/geometry";
import LineGeometry from "./geometry/line-geometry";

import PBREnviroment from "./material/pbr-enviroment";
import PBRMaterial from "./material/pbr-material";
import PhongMaterial from "./material/phong-material";
import RawMaterial from "./material/raw-material";
import ShaderMaterial from "./material/shader-material";
import MeshBuilder from "./mesh-builder/mesh-builder";

import Mat4 from "./matrix/mat4";
import Quat from "./matrix/quat";
import Vec2 from "./matrix/vec2";
import Vec3 from "./matrix/vec3";
import Vec4 from "./matrix/vec4";

const G3D = {

    Engine,
    GL,
    Env: {},

    Scene,
    Skybox,

    Buffer,
    BufferView,
    ElementBuffer,
    ElementBufferView,

    CubeTexture,
    Texture,

    Node,

    BaseOrthographicCamera,
    BasePerspectiveCamera,
    RotateOrthographicCamera,
    RotatePerspectiveCamera,

    AmbientLight,
    DirectionalLight,
    PointLight,

    LineMesh,
    Mesh,

    Geometry,
    LineGeometry,

    ShaderMaterial,

    PBREnviroment,
    PBRMaterial,
    PhongMaterial,
    RawMaterial,

    MeshBuilder,

    Mat4,
    Quat,
    Vec2,
    Vec3,
    Vec4,
};

export default G3D;
