import { useState } from 'react';
import 'pulsating-loader/dist/loader.css';

const pulsatingLoader = {
    test() {
        console.log('test');
    },
    // getHTML() {
    //     return (
    //         <>
    //         <div id="fullscreenLoader">
    //             <div id="foregroundOverlay">
    //                 <div className='sk-spinner'>
    //                     <div className='sk-spinner-pulse'></div>    
    //                 </div>
    //             </div>
    //         </div>
    //         </>
    //     );
    // }
};

// function Loader() {
//     return (
//         <div id="fullscreenLoader">
//             <div id="foregroundOverlay">
//                 <div className='sk-spinner'>
//                     <div className='sk-spinner-pulse'></div>    
//                 </div>
//             </div>
//         </div>
//     );
// }


module.exports = pulsatingLoader;