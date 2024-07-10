"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[431],{8281:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(4848),o=i(8453);const a={},r="Step 3: Adding Interactions",l={id:"Tutorials/Tutorial-\u2010-Step-3",title:"Step 3: Adding Interactions",description:"Objectives",source:"@site/docs/Tutorials/Tutorial-\u2010-Step-3.md",sourceDirName:"Tutorials",slug:"/Tutorials/Tutorial-\u2010-Step-3",permalink:"/Tutorials/Tutorial-\u2010-Step-3",draft:!1,unlisted:!1,editUrl:"https://github.com/project-SIMPLE/documentation/tree/main/docs/Tutorials/Tutorial-\u2010-Step-3.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Step 2: Creation of the Unity basic game",permalink:"/Tutorials/Tutorial-\u2010-Step-2"},next:{title:"Projects tools",permalink:"/category/projects-tools"}},s={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Modification of the GAMA model",id:"modification-of-the-gama-model",level:3},{value:"Traffic and Pollution.gaml",id:"traffic-and-pollutiongaml",level:4},{value:"traffic_model-VR.gaml",id:"traffic_model-vrgaml",level:4},{value:"Modification of the Unity project",id:"modification-of-the-unity-project",level:3},{value:"Other types of interactions",id:"other-types-of-interactions",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"step-3-adding-interactions",children:"Step 3: Adding Interactions"}),"\n",(0,n.jsx)(t.h2,{id:"objectives",children:"Objectives"}),"\n",(0,n.jsx)(t.p,{children:"The aim here is to enable simple interactions from the VR headset. In particular, we want to be able to block roads by selecting them with the interaction ray. We'll then look at other types of interaction, with the example of using a button on one of the controllers to change the brightness."}),"\n",(0,n.jsx)(t.h3,{id:"modification-of-the-gama-model",children:"Modification of the GAMA model"}),"\n",(0,n.jsx)(t.h4,{id:"traffic-and-pollutiongaml",children:"Traffic and Pollution.gaml"}),"\n",(0,n.jsx)(t.p,{children:'First, we will modify the "Traffic and Pollution.gaml" file to integrate the notion of blocked roads.\nIn the road species, we will add a boolean blocked attribute (initial value: false), and change the color of blocked road from white to red.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"species road {\n\t...\n\t\n\tbool blocked <- false;\n\n\taspect default {\n\t\tdraw (shape + 5) color:blocked ? #red: #white;\n\t}\n\n}\n\n"})}),"\n",(0,n.jsx)("img",{src:"https://github.com/project-SIMPLE/simple.template.unity/blob/2024-06/ReadmeRes/TutorialGAMARoad.png?raw=true",alt:"TutorialGAMARoad",width:"800"}),"\n",(0,n.jsx)(t.p,{children:"We will then modify the reflex update_road_speed of the global section to take into account the fact that speed on a blocked road will be close to 0."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"//Reflex to update the speed of the roads according to the weights\nreflex update_road_speed {\n\troad_weights <- road as_map (each::(each.shape.perimeter / each.speed_coeff * (each.blocked ? 100000.0 : 1.0)));\n\troad_network <- road_network with_weights road_weights;\n}\n\n"})}),"\n",(0,n.jsx)("img",{src:"https://github.com/project-SIMPLE/simple.template.unity/blob/2024-06/ReadmeRes/TutorialGAMAGlobal.png?raw=true",alt:"TutorialGAMAGlobal",width:"800"}),"\n",(0,n.jsx)(t.p,{children:'Finally, we will modify the "carte" display to be able to see the change for the display of roads. For that, just change the line "species road refresh: false;" by "species road refresh: true;".'}),"\n",(0,n.jsx)("img",{src:"https://github.com/project-SIMPLE/simple.template.unity/blob/2024-06/ReadmeRes/TutorialGAMADisplay.png?raw=true",alt:"TutorialGAMADisplay",width:"800"}),"\n",(0,n.jsx)(t.h4,{id:"traffic_model-vrgaml",children:"traffic_model-VR.gaml"}),"\n",(0,n.jsx)(t.p,{children:"We're going to add an action to block a specific road (based on its name) in the Unity Linker species. In order to make a direct link between roads and their names, we've defined a map called \"roads\" that allows you to obtain the right road directly from a road name. This action will be called directly from Unity. If the route is not null, if the route is already blocked, the action will unblock it, and block it otherwise."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\tmap<string,road> roads <- road as_map (each.name :: each);\n\t\n\taction block_road(string id) {\n\t\troad b <- roads[id];\n\t\tif (b != nil) {\n\t\t\task b {\n\t\t\t\tif (not blocked) {\n\t\t\t\t\tblocked <- true;\n\t\t\t\t} else {\n\t\t\t\t\tblocked <- false;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t}\n\t}\n"})}),"\n",(0,n.jsx)("img",{src:"https://github.com/project-SIMPLE/simple.template.unity/blob/2024-06/ReadmeRes/TutorialGAMAUnityLinker.png?raw=true",alt:"TutorialGAMAUnityLinker",width:"800"}),"\n",(0,n.jsx)(t.h3,{id:"modification-of-the-unity-project",children:"Modification of the Unity project"}),"\n",(0,n.jsx)(t.p,{children:'The first step is to extend the ray interaction distance.\nInspect "GodViewPlayer/XR Origin (XR Rig)/Camera Offset/Right Controller/Ray Interactor", then set the "Max Raycast Distance" (in "XR Ray Interactor/Raycast Configuration") to 500 and in "XR Interactor Line Visual" uncheck "Override Line Length".'}),"\n",(0,n.jsx)("img",{src:"https://github.com/project-SIMPLE/simple.template.unity/blob/2024-06/ReadmeRes/TutorialRayInteractor.png?raw=true",alt:"TutorialRayInteractor",width:"800"}),"\n",(0,n.jsx)(t.p,{children:"The second step is to specify what will happen when the player points the ray at a route and selects it.\nOpen the script Assets/Gama Provider/SimulationManager. In this script, 3 functions control the XR-interaction: HoverEnterInteraction, HoverExitInteraction and SelectInteraction."}),"\n",(0,n.jsx)(t.p,{children:'HoverEnterInteraction specifies what happens when the player passes over an object that can be interacted with. In the example given by default in the code, the object changes color to blue. We modify the code to just take into object with the tag "road".'}),"\n",(0,n.jsx)(t.p,{children:'HoverExitInteraction specifies what happens when the player is no longer in contact with an object that can be interacted with. In the example given by default in the code, the object changes color and reverts to gray if not selected, or red otherwise.  We modify the code to just take into object with the tag "road".'}),"\n",(0,n.jsx)(t.p,{children:'SelectInteraction specifies what happens when the player selects an object (by default using the controller\'s second trigger - the white button along the handle). In the default example, if it\'s an object with the "interactable" tag, Unity triggers a GAMA action ("update_hotspot") which takes the name of the selected object as an argument and change the color of the object to red. Note that to prevent the player from pressing several times on the object too quickly, a timer is used to prevent a second action before "timeWithoutInteraction" seconds (set to 1s by default). For our tutorial, we\'ll just modify the name of the action to be called: instead of "update_hotspot", we\'ll call the "block_road" action we\'ve just defined in the unity Linker (GAMA model) and we will consider only the tag "road".'}),"\n",(0,n.jsx)("img",{src:"https://github.com/project-SIMPLE/simple.template.unity/blob/2024-06/ReadmeRes/TutorialSelectInteraction.png?raw=true",alt:"TutorialSelectInteraction",width:"800"}),"\n",(0,n.jsx)(t.h3,{id:"other-types-of-interactions",children:"Other types of interactions"}),"\n",(0,n.jsx)(t.p,{children:'It\'s possible to go further in specifying interactions. In particular, it is possible to define exactly what will happen when the player uses a specific button/stick on the controller. To do this, a first step consists in defining a specific action by editing the "XRI Default Input Actions" file in "Assets/Samples/XR Interaction Tookit/2.4.3/Starter Assets". Double-click on this file to open it. Specific actions can be added afterwards. For example, in "XRI RightHand Interaction", we\'ve added a "Main Button" action of type "Button".  In the Path, we specified that this action will be triggered by the main button on the right-hand controller.'}),"\n",(0,n.jsx)(t.p,{children:"To be able to use this action, we added a SerializedField in the SimulationManager Script:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"[SerializeField] private InputActionReference primaryRightHandButton; \n"})}),"\n",(0,n.jsx)(t.p,{children:"And in the Game Manager, we drag and drop the MainButton action to this field. Then, in the update function (that is activated at each frame),in order to trigger the TriggerMainButton when the main button is pushed we added:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:" if (primaryRightHandButton != null && primaryRightHandButton.action.triggered)\n        {\n            TriggerMainButton();\n        }\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the default exemple the function TriggerMainButton just just change the intensity of the light."})]})}function h(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{RP:()=>a});var n=i(6540);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);