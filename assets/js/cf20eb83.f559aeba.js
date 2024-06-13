"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[872],{6095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const o={title:"Install Unity Template"},a="GAMA VR Provider",r={id:"Getting-started/simple.template.unity",title:"Install Unity Template",description:"This project allows to adapt a GAMA simulation to a VR environment created with Unity. It provides the VR developer with a game and connection management system, including GameObjects, methods and events that can be hooked. A list of these elements and how to use them is provided in the Documentation section.",source:"@site/docs/Getting-started/simple.template.unity.md",sourceDirName:"Getting-started",slug:"/Getting-started/simple.template.unity",permalink:"/Getting-started/simple.template.unity",draft:!1,unlisted:!1,editUrl:"https://github.com/project-SIMPLE/documentation/tree/main/docs/Getting-started/simple.template.unity.md",tags:[],version:"current",frontMatter:{title:"Install Unity Template"},sidebar:"docSidebar",previous:{title:"Install GAMA Plugin",permalink:"/Getting-started/gaml.extension.unity"},next:{title:"Tutorials",permalink:"/category/tutorials"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"What is included",id:"what-is-included",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Documentation",id:"documentation",level:2},{value:"WebSocketConnector",id:"websocketconnector",level:3},{value:"ConnectionManager",id:"connectionmanager",level:3},{value:"SimulationManager",id:"simulationmanager",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.RP)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gama-vr-provider",children:"GAMA VR Provider"}),"\n",(0,i.jsxs)(n.p,{children:["This project allows to adapt a GAMA simulation to a VR environment created with Unity. It provides the VR developer with a game and connection management system, including GameObjects, methods and events that can be hooked. A list of these elements and how to use them is provided in the ",(0,i.jsx)(n.a,{href:"#documentation",children:(0,i.jsx)(n.strong,{children:"Documentation"})})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["A description of the use of the template with a tutorial can be found ",(0,i.jsx)(n.a,{href:"https://github.com/project-SIMPLE/documentation/wiki",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["[!WARNING]\nThe project is being developped using ",(0,i.jsx)(n.strong,{children:"Unity Editor 2022.3.5f1"}),". Although it should work with newer versions, as is doesn't use any version-specific features (for now), it is strongly recommanded to use exactly the same Editor version."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Once the project is opened in Unity, if you have any errors, you can check the following points:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure that ",(0,i.jsx)(n.strong,{children:"Newtonsoft Json"})," is installed. Normaly, cloning this repo should ensure that it is installed. But if it's not the case, follow the tutorial on this ",(0,i.jsx)(n.a,{href:"https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM",children:"link"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["To work properly, we assume that you already have a compatible GAMA model and optionally that you have installed the ",(0,i.jsx)(n.a,{href:"https://github.com/project-SIMPLE/GamaServerMiddleware",children:(0,i.jsx)(n.strong,{children:"Gama Server Middleware"})})," if you want to design a multi-player game."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["[!TIP]\n",(0,i.jsx)(n.strong,{children:"For Windows users"}),", make sure that the folder Assets/Plugins contains a .dll file called websocket-sharp. If not, download it from ",(0,i.jsx)(n.a,{href:"https://github.com/sta/websocket-sharp",children:"this repo"}),". And place it in Assets/Plugins in your Unity project."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"what-is-included",children:"What is included"}),"\n",(0,i.jsx)(n.p,{children:"The project contains five scenes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Startup Menu: Main menu that allows to load two Scenes - IP Menu and Main Scene. It allows as well to define if the middleware will be used or not. Using the middleware requires to run another software (the middleware), but allows to connect several players et to follow the connection status of the players."}),"\n",(0,i.jsx)(n.li,{children:"IP Menu: allows to change the IP used to connect to the computer running the middleware/GAMA"}),"\n",(0,i.jsx)(n.li,{children:"End of Game Menu: Menu that appears at the end of a game session, displaying information for the player(s), such as scores or a summary of the game session. It can also be used to restart a new game."}),"\n",(0,i.jsxs)(n.li,{children:["Single Player Game/Main Scene: main scene for the single player game with the required script and the following GameObjects:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Directional Light"}),"\n",(0,i.jsx)(n.li,{children:"FPS Player"}),"\n",(0,i.jsxs)(n.li,{children:["ManagersSolo","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connection Manager: define the connection properties of Unity"}),"\n",(0,i.jsx)(n.li,{children:"Game Manager: define all the aspects of the game"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Teleport Area: used only for FPS player to move using teleportation","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Debug Overlay (not activated by default): display all the information written in the model (using Debug.Log("message")).'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Multi Player Game/Main Scene: main scene for the multi-player game with the required script and the following GameObjects:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Directional Light"}),"\n",(0,i.jsx)(n.li,{children:"FPS Player"}),"\n",(0,i.jsxs)(n.li,{children:["ManagersMulti","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connection Manager: define the connection properties of Unity"}),"\n",(0,i.jsx)(n.li,{children:"Game Manager: define all the aspects of the game"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Teleport Area: used only for FPS player to move using teleportation"}),"\n",(0,i.jsxs)(n.li,{children:["HUD","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Infos for Player: display on the player screen different information (e.g. current score)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:'Debug Overlay (not activated by default): display all the information written in the model (using Debug.Log("message")).'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the silmple.template.project.\n",(0,i.jsx)(n.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/download.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(n.li,{children:["Import it as a Unity project. ",(0,i.jsx)(n.strong,{children:"Make sure to use the right Editor version (Unity Editor 2022.3.5f1)"}),".\n",(0,i.jsx)(n.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/qs-1.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(n.li,{children:['In the Menu "File" select "Build Settings..."\n',(0,i.jsx)(n.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/Build-setting_menu.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(n.li,{children:['Select "Android" in "Platform", then click on "Switch Platform". You can after build and deploy the application on the headset by clicking on "Build and Run".\n',(0,i.jsx)(n.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/Build-setting.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(n.li,{children:["To run the application in conjunction with GAMA, make sure you have installed ",(0,i.jsx)(n.a,{href:"https://github.com/gama-platform/gama/releases/tag/2024.03.0",children:"GAMA 2024/03"})," and the ",(0,i.jsx)(n.a,{href:"https://github.com/project-SIMPLE/gaml.extension.unity",children:"Unity Plugin for GAMA"}),". Information on installing the plugin is available [here] (",(0,i.jsx)(n.a,{href:"https://github.com/project-SIMPLE/gaml.extension.unity?tab=readme-ov-file#from-gama",children:"https://github.com/project-SIMPLE/gaml.extension.unity?tab=readme-ov-file#from-gama"}),"). The plugin provides two demo models (added in Plugin models/LinkToUnity/Single Player Game/DemoModelVR.gaml and Plugin models/LinkToUnity/Multi Player Game/RaceVR.gaml) that works with the Unity template, and in particular the two main scenes. To connect the VR headset to this model, run the vr_xp experiment before connecting the headset."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(n.p,{children:["This section focuses only on the C# scripts which are useful for a Unity developer.\n",(0,i.jsx)(n.strong,{children:"Important note:"}),' As all the scripts which name finishes by "Manager" are instantiated when Unity is launched in the "Managers" GameObject, they are all developed using the Singleton Pattern. Hence trying to instantiate in some external scripts could break the default mechanisms. To call a method from one of these classes, one should rather use the following code snippet :']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"NameOfClassManager.Instance.SomeMethod();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"websocketconnector",children:"WebSocketConnector"}),"\n",(0,i.jsxs)(n.p,{children:["Base abstract class to establish a web-socket connection with GAMA. All the methods of this class are private or protected. Hence they are only accessible through a child class (ConnectionManager here).",(0,i.jsx)(n.br,{}),"\n","Theorically, in most cases, ",(0,i.jsx)(n.strong,{children:"one mustn't try to access the methods of this class"}),", as they are alreay used/overriden by ConnectionManager."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Abstract Methods:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HandleConnectionOpen"})," : triggered when a web-socket connection is established."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HandleReceivedMessage"})," : triggered when a message is received from the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HandleConnectionClosed"})," : triggered when the connection is closed, either by the server or by Unity itself."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"connectionmanager",children:"ConnectionManager"}),"\n",(0,i.jsxs)(n.p,{children:['This class extends WebSocketConnector and implements the methods mentioned above. The corresponding script is already in a GameObject called "Connection Manager", which is already in the Main Scene.',(0,i.jsx)(n.br,{}),"\n","It is in charge of creating an ID for the player once the connection with GAMA is established. Moreover, it provides the Unity developer with a state machine implemented as an ",(0,i.jsx)(n.code,{children:"enum"})," to handle each stage of the connection process. The specific role of each state is explained in the script source code. Some useful events allow the developer to to handle connection transitions and informations."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Events:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OnConnectionStateChange<ConnectionState newState>"})," : Triggered when a transition from one connection state from another occurs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OnConnectiontStateReceived<JObject payload>"}),' : Triggered when Unity receives a Json message from the server, which "type" field holds "json_state". For further informations about the payload detail, please refer to GamaServerMiddleware documentation']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OnConnectionAttempted<boolean connectionSuccess>"}),' : Triggered when a Json object with type "json_state" is received from the server, after Unity attempted to connect to it using ',(0,i.jsx)(n.code,{children:"TryConnectionToServer"})," method. The boolean ",(0,i.jsx)(n.code,{children:"connectionSuccess"})," contains true if the connection was successfully established, false otherwise."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OnServerMessageReceived"}),' : Triggered when Unity receives a Json message from the server, which "type" field holds "json_simulation". For further informations about the payload detail, please refer to GamaServerMiddleware documentation.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Methods:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UpdateConnectionState(ConnectionState newState)"})," : Changes the current connection state to ",(0,i.jsx)(n.code,{children:"newState"}),". Calling this method should be avoided whenever possible, as it could break the default connection process, leading to some undefined state."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TryConnectionToServer"})," : Attemps a connection to the middleware or to GAMA"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"IsConnectionState(ConnectionState currentState)"})," : Checks current state."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SendExecutableExpression(string expression)"})," : Allows to send an expression to GAMA through the middleware or directlty to GAMA. The expression is compiled and executed in the experiment context. ","\u26a0\ufe0f"," Beware of the arguments expected by GAMA and special characters required by GAMA (such as ",(0,i.jsx)(n.code,{children:";"}),", ",(0,i.jsx)(n.code,{children:'"'}),", ...) as the expression is executed as it is sent by Unity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SendExecutableAsk(string action, Dictionary<string,string> arguments)"})," : Allows you to ask one of the  agents of the simulation to trigger an action (defined by its name), the second argument represents the values of the action arguments given by a dictionary (key: name of the argument, value: value of the argument). ","\u26a0\ufe0f"," unlike SendExecutableExpression, the expression is not compiled, which is less time-consuming for GAMA, but only allows you to send simple values for the action's argument values and not complex expressions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GetConnectionId"})," : Returns the ID created by Unity when the connection was established."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"simulationmanager",children:"SimulationManager"}),"\n",(0,i.jsx)(n.p,{children:"This is the core script of this package. It allows to manage the actions triggered by the messages received by GAMA."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Events"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OnGameStateChanged<GameState newGameState>"})," : Triggered when a transition from one GameState to another occurs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OnGameRestarted"})," : Triggered when the function ",(0,i.jsx)(n.code,{children:"RestartGame"})," is called."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OnGeometriesInitialized<GAMAGeometry geometries>"})," : Triggered when the initial geometries sent by GAMA are converted into polygons in the Unity scene. By default, ",(0,i.jsx)(n.code,{children:"OnGameStateChanged"})," is triggered just after this event, to switch from the LOADING_DATA state to the GAME state. Hooking to this event allows to seperate the logic between the game state transition and the loading of geometries.",(0,i.jsx)(n.br,{}),"\n","\u26a0\ufe0f"," This event is called when incoming geometric data is successfully managed and NOT when it is received."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Methods"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"void UpdateGameState(GameState newState)"})," : Changes the current game state to ",(0,i.jsx)(n.code,{children:"newState"}),". This method must be used with caution, as it could break the default game logic, leading to errors in the execution of crucial steps such as initialization or connection steps."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GameState GetCurrentState"})," : Returns the current game state"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bool IsGameState(GameState state)"})," : Compares the current game state with the one specified as a parameter."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"void RestartGame"})," : Restarts the game. Concretely, it reloads the main scene. This implementation is quite basic and can be enhanced with additional features by using the ",(0,i.jsx)(n.code,{children:"OnGameRestarted"})," event."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.RP)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{RP:()=>o});var i=t(6540);const s=i.createContext({});function o(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);