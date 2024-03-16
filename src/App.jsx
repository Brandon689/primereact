import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './NodeService';
import HeadlessDemo from './SideBar';

export default function BasicDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className='layout-container layout-wrapper layout-dark layout-static' data-theme="dark">
            <div>
            <HeadlessDemo/>
            <p>
                

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat at tellus at finibus. Vivamus auctor, leo nec tempor viverra, diam leo hendrerit quam, et suscipit sapien diam eget nisl. Sed sodales, eros nec dapibus commodo, sem diam rhoncus dui, vel posuere mauris ipsum quis tortor. Suspendisse risus nisi, elementum tincidunt erat sit amet, tempor tempor diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ante arcu, auctor sit amet magna ac, ultrices hendrerit magna. Curabitur dignissim ipsum rhoncus fringilla feugiat. Suspendisse et maximus nisl. Proin a tincidunt sapien. Nullam non auctor turpis. Fusce bibendum risus in feugiat convallis. Nulla dictum erat eros, vel tincidunt nulla ultricies vel. Morbi congue felis et neque gravida, in mattis nibh condimentum. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel placerat ipsum, vel consequat sem. Quisque quis laoreet enim. Mauris tempus risus at dapibus convallis. Etiam lorem arcu, auctor non risus at, euismod auctor purus. Mauris tristique dui id dolor eleifend venenatis. Proin id orci interdum, dapibus risus sit amet, cursus sem. Vestibulum risus enim, feugiat nec vehicula sed, malesuada nec urna. Pellentesque vel massa sit amet mi tempus tempor nec at justo. Cras scelerisque libero vitae dolor commodo molestie. Phasellus non tempus metus, quis porttitor sem. Cras rutrum dolor in viverra euismod. Ut tempor felis purus, eu consectetur ipsum euismod eget.

Nam pharetra mollis ante, eu euismod turpis elementum at. Maecenas luctus augue ut purus pellentesque, mollis luctus ipsum euismod. Morbi pretium varius velit, in mattis orci vulputate malesuada. Ut condimentum cursus sagittis. In rhoncus orci id vulputate condimentum. Morbi porttitor elementum velit sit amet luctus. Nunc vehicula turpis neque. Suspendisse imperdiet molestie est egestas molestie. Phasellus convallis, turpis ac malesuada facilisis, tortor justo lacinia sem, eget consequat urna elit in diam. Nulla blandit tempor ultrices. Sed in sapien sapien. Mauris quis facilisis erat. Aliquam erat volutpat.

Integer ante ipsum, accumsan in lorem in, sagittis scelerisque nibh. Nullam vehicula luctus nunc eu faucibus. Vivamus at tincidunt erat. Sed mi leo, porttitor quis quam nec, placerat rhoncus felis. Nunc vel purus faucibus, semper nulla eu, feugiat elit. Vestibulum turpis metus, efficitur a accumsan in, malesuada ac tortor. Aliquam suscipit tellus vehicula dolor pellentesque convallis. Nulla fringilla neque risus, sit amet viverra nisl dictum ac. Curabitur justo ex, ornare sit amet justo sit amet, consectetur tempor est. Etiam posuere, tellus eget tempus finibus, lacus augue pretium sapien, sed dictum velit magna quis sem. Pellentesque id nulla iaculis, sagittis quam ac, porttitor elit. Duis mollis lorem non leo iaculis iaculis. Vestibulum magna leo, sollicitudin sed lorem vitae, suscipit ultrices nibh. Donec lacus nulla, ornare sit amet nisl eget, viverra rutrum libero.

Phasellus sed pellentesque nibh, ac dapibus turpis. Etiam quis ante at lorem elementum vestibulum. Morbi cursus orci id enim porttitor, sit amet molestie nibh fringilla. Phasellus faucibus elit in odio iaculis aliquet. Sed vel vulputate mi. Sed eu massa non mi aliquam ornare eget et purus. Integer gravida, magna et vulputate rhoncus, justo elit sodales arcu, egestas placerat eros elit at nisi. Pellentesque feugiat tempor faucibus.

Maecenas et est id massa lobortis convallis nec vel tortor. Duis eu augue purus. Proin sem massa, eleifend in scelerisque eu, gravida et diam. In aliquam libero id sem vestibulum auctor. Morbi ut mi aliquam, egestas felis eu, malesuada odio. Morbi id felis ut mi sagittis congue. Morbi tempus felis vel venenatis dictum. Pellentesque laoreet, ex at cursus rhoncus, felis erat condimentum leo, nec iaculis urna eros quis odio.

Vestibulum vehicula elit eget ante laoreet, eget venenatis erat ultrices. Aenean mattis sapien sed volutpat tempor. Aliquam commodo mattis mollis. Fusce in turpis sed diam scelerisque tincidunt vitae fermentum sem. Etiam in massa lobortis, dapibus odio euismod, aliquet libero. Nam eu neque non erat tempus luctus eget eu sem. Pellentesque sit amet pellentesque dui, sed posuere mi. Nam quis felis ligula. Suspendisse eu ante rutrum, vestibulum elit in, pretium erat. Praesent lacinia arcu sit amet consectetur consectetur. Praesent rhoncus lacinia nulla nec bibendum.

Maecenas id dui id lorem sodales ornare. Sed ut ante a quam porta venenatis id et nisi. Mauris vel tellus et augue faucibus elementum ac quis erat. Cras a nisl hendrerit, tempor velit vel, gravida quam. Proin porttitor malesuada fermentum. Fusce condimentum erat quis tortor luctus, vitae faucibus dui sagittis. Sed quis fringilla mauris. Duis nec dolor pulvinar, egestas orci eu, accumsan arcu. Sed faucibus nisl vel porttitor ullamcorper. Aenean id orci blandit mauris dignissim dictum et at felis.

Ut vel libero nibh. Phasellus fermentum sed enim vel iaculis. Donec sodales vitae nunc convallis interdum. Nam pulvinar magna in dolor tristique venenatis. Nullam id lacus sit amet leo faucibus auctor sit amet non mi. Proin sed vehicula leo. Cras pellentesque condimentum dapibus. Maecenas sagittis justo eget congue luctus. Vivamus et ornare ante. Proin ornare odio at dictum sollicitudin.

Nunc eget libero tincidunt felis ultrices euismod. Nunc faucibus feugiat luctus. Sed vitae risus eu felis malesuada dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tortor nibh, molestie eu ipsum ut, viverra viverra augue. Fusce porttitor ultricies diam non dictum. Donec vel efficitur nunc. Integer non interdum eros. Proin id aliquam enim, eu sollicitudin nunc.

Curabitur erat arcu, volutpat eget ipsum quis, pellentesque dignissim ex. Phasellus eget venenatis mauris. Mauris varius ac nulla sagittis maximus. Donec pulvinar, elit vehicula scelerisque blandit, nisl sem dictum dolor, vitae pharetra urna risus ut mauris. Sed vitae ligula nec neque pellentesque tincidunt. Proin ut ullamcorper lectus. Nam quis ex at magna lacinia tincidunt a vitae mi. Ut pretium enim nec sem sollicitudin maximus. Aliquam orci nulla, dapibus sit amet sem id, sodales vehicula leo. Nulla ut turpis felis.

In viverra nisi sit amet tortor consequat ullamcorper. Nulla nisl ex, pellentesque id tempor aliquet, auctor sit amet nulla. Nullam odio leo, maximus vel mauris eu, dapibus interdum leo. Ut non dictum dolor. Maecenas lorem quam, tempor ultrices sollicitudin et, sagittis a arcu. Fusce volutpat fringilla odio, ut luctus sapien imperdiet id. Curabitur consequat quam tristique urna euismod semper.

Sed tristique, ante non auctor accumsan, elit massa pretium purus, eget gravida ipsum turpis eget nunc. Sed sapien tellus, egestas sed dignissim sed, viverra vel mi. In semper odio risus, in lobortis metus semper sed. Vestibulum non est hendrerit, faucibus dolor sit amet, egestas nibh. Ut eget fermentum turpis. Donec commodo, tellus nec commodo congue, diam eros auctor arcu, ac tristique tellus dolor id urna. Praesent sollicitudin bibendum mauris id maximus. Suspendisse odio sem, cursus sed lectus eu, condimentum sodales turpis. Curabitur ullamcorper in augue nec iaculis. Fusce rhoncus tellus in justo porttitor vestibulum. Curabitur tincidunt elementum pretium. Aliquam mollis, justo eget dignissim euismod, ligula nibh egestas quam, et dictum diam augue vel est. In hac habitasse platea dictumst.

Cras vitae tristique ex. Mauris lobortis velit nec hendrerit maximus. Sed gravida aliquet diam, et porta magna mattis nec. Quisque eget libero in augue condimentum vestibulum a quis sem. Proin ut dictum velit. Duis euismod justo et consectetur ultricies. Pellentesque eu nunc diam. Quisque consequat dui erat, nec tincidunt mauris feugiat eu. Aliquam convallis porta augue eget ornare. Integer porta elementum nisi quis lobortis.

Integer lectus lectus, accumsan nec ornare quis, bibendum sit amet massa. Donec dictum orci ac vehicula blandit. Morbi pretium molestie nisl, sit amet iaculis est ultrices non. Duis fermentum orci sed eros convallis gravida. Mauris a volutpat eros. Praesent ultricies odio id sollicitudin interdum. Praesent nec lectus semper ante fermentum lacinia nec et odio. Morbi non odio non tortor accumsan rutrum et ac velit. Praesent felis arcu, condimentum et aliquam sed, finibus sit amet metus. Nunc mattis ullamcorper ligula, et faucibus purus interdum sit amet. Aenean eget quam turpis. Cras suscipit lobortis venenatis. Ut nec cursus dolor. Nulla ornare non tortor a pharetra. Sed tincidunt venenatis varius. 
            </p>
            </div>
        </div>
        // <div className="card flex justify-content-center">
        //     <Tree value={nodes} className="w-full md:w-30rem" />
        // </div>
    )
}
        