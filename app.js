import {pc1,pd1,pe1,pf1,pg1,pa1,pb1,pdb1,peb1,pgb1,pab1,pbb1,pc2,pd2,pe2,pf2,pg2,pa2,pb2,pdb2,peb2,pgb2,pab2,pbb2,pc3,pd3,pe3,pf3,pg3,pa3,pb3,pdb3,peb3,pgb3,pab3,pbb3,pc4,pd4,pe4,pf4,pg4,pa4,pb4,pdb4,peb4,pgb4,pab4,pbb4,pc5,pd5,pe5,pf5,pg5,pa5,pb5,pdb5,peb5,pgb5,pab5,pbb5,pc6,pd6,pe6,pf6,pg6,pa6,pb6,pdb6,peb6,pgb6,pab6,pbb6} from './audio.js'
import {bellaCiao, forElise, luxAeterna} from "./tunes.js";

const con01 = document.querySelector('.con-1');
const con0 = document.querySelector('.con0');
const con1 = document.querySelector('.con1');
const con2 = document.querySelector('.con2');
const con3 = document.querySelector('.con3');
const con4 = document.querySelector('.con4');

    // --------------------------------------------------------------------------------
    // ------------------------- -1 KEYDOWN ------------------

    //                   ...........posle

    // --------------------------------------------------------------------------------
    // ------------------------- -1 KEYUP --------------------

    //                   ...........posle

    // --------------------------------------------------------------------------------
    //---------------------------------- -1 MOUSEDOWN -----------------

    con01.addEventListener('mousedown', (e)=>{
        if(e.target.classList.contains('f1') || e.target.classList.contains('f1r')){
            pf1();
            const element1 = con01.querySelector('.f1');
            const element2 = con01.querySelector('.f1r');
            element1.classList.add('press');
            element2.classList.add('press')
        }

        if(e.target.classList.contains('g1') || e.target.classList.contains('g1r')){
            pg1();
            const element1 = con01.querySelector('.g1');
            const element2 = con01.querySelector('.g1r');
            element1.classList.add('press');
            element2.classList.add('press')
        }

        if(e.target.classList.contains('a1') || e.target.classList.contains('a1r')){
            pa1();
            const element1 = con01.querySelector('.a1');
            const element2 = con01.querySelector('.a1r');
            element1.classList.add('press');
            element2.classList.add('press')
        }

        if(e.target.classList.contains('b1') || e.target.classList.contains('b1r')){
            pb1();
            const element1 = con01.querySelector('.b1');
            const element2 = con01.querySelector('.b1r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // crne
        if(e.target.classList.contains('gb1')){
            pgb1();
            const element = con01.querySelector('.gb1');    
            element.classList.add('pressb');
        }

        if(e.target.classList.contains('ab1')){
            pab1();
            const element = con01.querySelector('.ab1');    
            element.classList.add('pressb');
        }

        if(e.target.classList.contains('bb1')){
            pbb1();
            const element = con01.querySelector('.bb1');    
            element.classList.add('pressb');
        }
    });

    // -------------------------------------------------------------------------------------
    //-------------------------------------- -1 MOUSEUP -------------------------------------
    
    con01.addEventListener('mouseup', (e)=>{
        if(e.target.classList.contains('f1') || e.target.classList.contains('f1r')){
            const element1 = con01.querySelector('.f1');
            const element2 = con01.querySelector('.f1r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }

        if(e.target.classList.contains('g1') || e.target.classList.contains('g1r')){
            const element1 = con01.querySelector('.g1');
            const element2 = con01.querySelector('.g1r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }

        if(e.target.classList.contains('a1') || e.target.classList.contains('a1r')){
            const element1 = con01.querySelector('.a1');
            const element2 = con01.querySelector('.a1r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }

        if(e.target.classList.contains('b1') || e.target.classList.contains('b1r')){
            const element1 = con01.querySelector('.b1');
            const element2 = con01.querySelector('.b1r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // crne

        if(e.target.classList.contains('gb1')){
            const element = con01.querySelector('.gb1');    
            element.classList.remove('pressb');
        }

        if(e.target.classList.contains('ab1')){
            const element = con01.querySelector('.ab1');    
            element.classList.remove('pressb');
        }

        if(e.target.classList.contains('bb1')){
            const element = con01.querySelector('.bb1');    
            element.classList.remove('pressb');
        }
    });

//---------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // ------------------------- 0 KEYDOWN ------------------

    //                   ...........posle

    // --------------------------------------------------------------------------------
    // ------------------------- 0 KEYUP --------------------

    //                   ...........posle

    // --------------------------------------------------------------------------------
    //---------------------------------- 0 MOUSEDOWN -----------------

    con0.addEventListener('mousedown', (e)=>{
        if(e.target.classList.contains('c2') || e.target.classList.contains('c2r')){
            pc2();
            const element1 = con0.querySelector('.c2');
            const element2 = con0.querySelector('.c2r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('d2') || e.target.classList.contains('d2r')){
            pd2();
            const element1 = con0.querySelector('.d2');
            const element2 = con0.querySelector('.d2r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('e2') || e.target.classList.contains('e2r')){
            pe2();
            const element1 = con0.querySelector('.e2');
            const element2 = con0.querySelector('.e2r');
            element1.classList.add('press');
            element2.classList.add('press')
        }

        if(e.target.classList.contains('f2') || e.target.classList.contains('f2r')){
            pf2();
            const element1 = con0.querySelector('.f2');
            const element2 = con0.querySelector('.f2r');
            element1.classList.add('press');
            element2.classList.add('press')
        }

        if(e.target.classList.contains('g2') || e.target.classList.contains('g2r')){
            pg2();
            const element1 = con0.querySelector('.g2');
            const element2 = con0.querySelector('.g2r');
            element1.classList.add('press');
            element2.classList.add('press')
        }

        if(e.target.classList.contains('a2') || e.target.classList.contains('a2r')){
            pa2();
            const element1 = con0.querySelector('.a2');
            const element2 = con0.querySelector('.a2r');
            element1.classList.add('press');
            element2.classList.add('press')
        }

        if(e.target.classList.contains('b2') || e.target.classList.contains('b2r')){
            pb2();
            const element1 = con0.querySelector('.b2');
            const element2 = con0.querySelector('.b2r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // crne
        if(e.target.classList.contains('db2')){
            pdb2();
            const element = con0.querySelector('.db2');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('eb2')){
            peb2();
            const element = con0.querySelector('.eb2');    
            element.classList.add('pressb');
        }

        if(e.target.classList.contains('gb2')){
            pgb2();
            const element = con0.querySelector('.gb2');    
            element.classList.add('pressb');
        }

        if(e.target.classList.contains('ab2')){
            pab2();
            const element = con0.querySelector('.ab2');    
            element.classList.add('pressb');
        }

        if(e.target.classList.contains('bb2')){
            pbb2();
            const element = con0.querySelector('.bb2');    
            element.classList.add('pressb');
        }
    });

    // -------------------------------------------------------------------------------------
    //-------------------------------------- 0 MOUSEUP -------------------------------------
    
    con0.addEventListener('mouseup', (e)=>{
        if(e.target.classList.contains('c2') || e.target.classList.contains('c2r')){
            const element1 = con0.querySelector('.c2');
            const element2 = con0.querySelector('.c2r');
            element1.classList.remove('press');
            element2.classList.remove('press')
        }
    
        if(e.target.classList.contains('d2') || e.target.classList.contains('d2r')){
            const element1 = con0.querySelector('.d2');
            const element2 = con0.querySelector('.d2r');
            element1.classList.remove('press');
            element2.classList.remove('press')
        }
    
        if(e.target.classList.contains('e2') || e.target.classList.contains('e2r')){
            const element1 = con0.querySelector('.e2');
            const element2 = con0.querySelector('.e2r');
            element1.classList.remove('press');
            element2.classList.remove('press')
        }

        if(e.target.classList.contains('f2') || e.target.classList.contains('f2r')){
            const element1 = con0.querySelector('.f2');
            const element2 = con0.querySelector('.f2r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }

        if(e.target.classList.contains('g2') || e.target.classList.contains('g2r')){
            const element1 = con0.querySelector('.g2');
            const element2 = con0.querySelector('.g2r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }

        if(e.target.classList.contains('a2') || e.target.classList.contains('a2r')){
            const element1 = con0.querySelector('.a2');
            const element2 = con0.querySelector('.a2r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }

        if(e.target.classList.contains('b2') || e.target.classList.contains('b2r')){
            const element1 = con0.querySelector('.b2');
            const element2 = con0.querySelector('.b2r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // crne
        if(e.target.classList.contains('db2')){
            const element = con0.querySelector('.db2');    
            element.classList.remove('pressb');
        }

        if(e.target.classList.contains('eb2')){
            const element = con0.querySelector('.eb2');    
            element.classList.remove('pressb');
        }

        if(e.target.classList.contains('gb2')){
            const element = con0.querySelector('.gb2');    
            element.classList.remove('pressb');
        }

        if(e.target.classList.contains('ab2')){
            const element = con0.querySelector('.ab2');    
            element.classList.remove('pressb');
        }

        if(e.target.classList.contains('bb2')){
            const element = con0.querySelector('.bb2');    
            element.classList.remove('pressb');
        }
    })

    // --------------------------------------------------------------------------------
    // ------------------------- 1 KEYDOWN ------------------
    
    document.addEventListener('keydown', (e)=>{
        if(e.key==='z'){
            pc3();
            const element1 = con1.querySelector('.c3');
            const element2 = con1.querySelector('.c3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        if(e.key==='x'){
            pd3();
            const element1 = con1.querySelector('.d3');
            const element2 = con1.querySelector('.d3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='c'){
            pe3();
            const element1 = con1.querySelector('.e3');
            const element2 = con1.querySelector('.e3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='v'){
            pf3();
            const element1 = con1.querySelector('.f3');
            const element2 = con1.querySelector('.f3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='b'){
            pg3();
            const element1 = con1.querySelector('.g3');
            const element2 = con1.querySelector('.g3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='n'){
            pa3();
            const element1 = con1.querySelector('.a3');
            const element2 = con1.querySelector('.a3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='m'){
            pb3();
            const element1 = con1.querySelector('.b3');
            const element2 = con1.querySelector('.b3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // ------------ crne --------------
        if(e.key==='s'){
            pdb3();
            const element = con1.querySelector('.db3');    
            element.classList.add('pressb');
        }
        if(e.key==='d'){
            peb3();
            const element = con1.querySelector('.eb3');    
            element.classList.add('pressb');
        }
        if(e.key==='g'){
            pgb3();
            const element = con1.querySelector('.gb3');    
            element.classList.add('pressb');
        }
        if(e.key==='h'){
            pab3();
            const element = con1.querySelector('.ab3');    
            element.classList.add('pressb');
        }
        if(e.key==="j"){
            pbb3();
            const element = con1.querySelector('.bb3');    
            element.classList.add('pressb');
        }
    })
    
    // --------------------------------------------------------------------------------
    // ------------------------- 1 KEYUP --------------------
    
    document.addEventListener('keyup', (e)=>{
        if(e.key==='z'){
            const element1 = con1.querySelector('.c3');
            const element2 = con1.querySelector('.c3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        if(e.key==='x'){
            const element1 = con1.querySelector('.d3');
            const element2 = con1.querySelector('.d3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='c'){
            const element1 = con1.querySelector('.e3');
            const element2 = con1.querySelector('.e3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='v'){
            const element1 = con1.querySelector('.f3');
            const element2 = con1.querySelector('.f3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='b'){
            const element1 = con1.querySelector('.g3');
            const element2 = con1.querySelector('.g3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='n'){
            const element1 = con1.querySelector('.a3');
            const element2 = con1.querySelector('.a3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='m'){
            const element1 = con1.querySelector('.b3');
            const element2 = con1.querySelector('.b3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // ------------ crne --------------
        if(e.key==='s'){
            const element = con1.querySelector('.db3');    
            element.classList.remove('pressb');
        }
        if(e.key==='d'){
            const element = con1.querySelector('.eb3');    
            element.classList.remove('pressb');
        }
        if(e.key==='g'){
            const element = con1.querySelector('.gb3');    
            element.classList.remove('pressb');
        }
        if(e.key==='h'){
            const element = con1.querySelector('.ab3');    
            element.classList.remove('pressb');
        }
        if(e.key==='j'){
            const element = con1.querySelector('.bb3');    
            element.classList.remove('pressb');
        }
    })
    
    // --------------------------------------------------------------------------------
    //---------------------------------- 1 MOUSEDOWN -----------------
    
    con1.addEventListener('mousedown', (e)=>{
        if(e.target.classList.contains('c3') || e.target.classList.contains('c3r')){
            pc3();
            const element1 = con1.querySelector('.c3');
            const element2 = con1.querySelector('.c3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('d3') || e.target.classList.contains('d3r')){
            pd3();
            const element1 = con1.querySelector('.d3');
            const element2 = con1.querySelector('.d3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('e3') || e.target.classList.contains('e3r')){
            pe3();
            const element1 = con1.querySelector('.e3');
            const element2 = con1.querySelector('.e3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('f3') || e.target.classList.contains('f3r')){
            pf3();
            const element1 = con1.querySelector('.f3');
            const element2 = con1.querySelector('.f3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('g3') || e.target.classList.contains('g3r')){
            pg3();
            const element1 = con1.querySelector('.g3');
            const element2 = con1.querySelector('.g3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('a3') || e.target.classList.contains('a3r')){
            pa3();
            const element1 = con1.querySelector('.a3');
            const element2 = con1.querySelector('.a3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('b3') || e.target.classList.contains('b3r')){
            pb3();
            const element1 = con1.querySelector('.b3');
            const element2 = con1.querySelector('.b3r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // ------------ crne --------------
        if(e.target.classList.contains('db3')){
            pdb3();
            const element = con1.querySelector('.db3');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('eb3')){
            peb3();
            const element = con1.querySelector('.eb3');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('gb3')){
            pgb3();
            const element = con1.querySelector('.gb3');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('ab3')){
            pab3();
            const element = con1.querySelector('.ab3');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('bb3')){
            pbb3();
            const element = con1.querySelector('.bb3');    
            element.classList.add('pressb');
        }
    });
    
    // -------------------------------------------------------------------------------------
    //-------------------------------------- 1 MOUSEUP -------------------
    
    con1.addEventListener('mouseup', (e)=>{
        if(e.target.classList.contains('c3') || e.target.classList.contains('c3r')){
            const element1 = con1.querySelector('.c3');
            const element2 = con1.querySelector('.c3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('d3') || e.target.classList.contains('d3r')){
            const element1 = con1.querySelector('.d3');
            const element2 = con1.querySelector('.d3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('e3') || e.target.classList.contains('e3r')){
            const element1 = con1.querySelector('.e3');
            const element2 = con1.querySelector('.e3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('f3') || e.target.classList.contains('f3r')){
            const element1 = con1.querySelector('.f3');
            const element2 = con1.querySelector('.f3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('g3') || e.target.classList.contains('g3r')){
            const element1 = con1.querySelector('.g3');
            const element2 = con1.querySelector('.g3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('a3') || e.target.classList.contains('a3r')){
            const element1 = con1.querySelector('.a3');
            const element2 = con1.querySelector('.a3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('b3') || e.target.classList.contains('b3r')){
            const element1 = con1.querySelector('.b3');
            const element2 = con1.querySelector('.b3r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // ------------ crne --------------
        if(e.target.classList.contains('db3')){
            const element = con1.querySelector('.db3');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('eb3')){
            const element = con1.querySelector('.eb3');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('gb3')){
            const element = con1.querySelector('.gb3');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('ab3')){
            const element = con1.querySelector('.ab3');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('bb3')){
            const element = con1.querySelector('.bb3');    
            element.classList.remove('pressb');
        }
    });
    
    // --------------------------------------------------------------------------------
    // ------------------------- 2 KEYDOWN ------------------
    
    document.addEventListener('keydown', (e)=>{
        if(e.key==='`'){
            pc4();
            const element1 = con2.querySelector('.c4');
            const element2 = con2.querySelector('.c4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        if(e.key==='1'){
            pd4();
            const element1 = con2.querySelector('.d4');
            const element2 = con2.querySelector('.d4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='q'){
            pe4();
            const element1 = con2.querySelector('.e4');
            const element2 = con2.querySelector('.e4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='w'){
            pf4();
            const element1 = con2.querySelector('.f4');
            const element2 = con2.querySelector('.f4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='e'){
            pg4();
            const element1 = con2.querySelector('.g4');
            const element2 = con2.querySelector('.g4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='r'){
            pa4();
            const element1 = con2.querySelector('.a4');
            const element2 = con2.querySelector('.a4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='t'){
            pb4();
            const element1 = con2.querySelector('.b4');
            const element2 = con2.querySelector('.b4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // ------------ crne --------------
        if(e.key==='2'){
            pdb4();
            const element = con2.querySelector('.db4');    
            element.classList.add('pressb');
        }
        if(e.key==='3'){
            peb4();
            const element = con2.querySelector('.eb4');    
            element.classList.add('pressb');
        }
        if(e.key==='4'){
            pgb4();
            const element = con2.querySelector('.gb4');    
            element.classList.add('pressb');
        }
        if(e.key==='5'){
            pab4();
            const element = con2.querySelector('.ab4');    
            element.classList.add('pressb');
        }
        if(e.key==='6'){
            pbb4();
            const element = con2.querySelector('.bb4');    
            element.classList.add('pressb');
        }
    })
    
    // --------------------------------------------------------------------------------
    // ------------------------- 2 KEYUP --------------------
    
    document.addEventListener('keyup', (e)=>{
        if(e.key==='`'){
            const element1 = con2.querySelector('.c4');
            const element2 = con2.querySelector('.c4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        if(e.key==='1'){
            const element1 = con2.querySelector('.d4');
            const element2 = con2.querySelector('.d4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='q'){
            const element1 = con2.querySelector('.e4');
            const element2 = con2.querySelector('.e4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='w'){
            const element1 = con2.querySelector('.f4');
            const element2 = con2.querySelector('.f4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='e'){
            const element1 = con2.querySelector('.g4');
            const element2 = con2.querySelector('.g4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='r'){
            const element1 = con2.querySelector('.a4');
            const element2 = con2.querySelector('.a4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='t'){
            const element1 = con2.querySelector('.b4');
            const element2 = con2.querySelector('.b4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // ------------ crne --------------
        if(e.key==='2'){
            const element = con2.querySelector('.db4');    
            element.classList.remove('pressb');
        }
        if(e.key==='3'){
            const element = con2.querySelector('.eb4');    
            element.classList.remove('pressb');
        }
        if(e.key==='4'){
            const element = con2.querySelector('.gb4');    
            element.classList.remove('pressb');
        }
        if(e.key==='5'){
            const element = con2.querySelector('.ab4');    
            element.classList.remove('pressb');
        }
        if(e.key==='6'){
            const element = con2.querySelector('.bb4');    
            element.classList.remove('pressb');
        }
    })
    
    // --------------------------------------------------------------------------------
    //-------------------------------------- 2 MOUSEDOWN --------------
    
    con2.addEventListener('mousedown', (e)=>{
        if(e.target.classList.contains('c4') || e.target.classList.contains('c4r')){
            pc4();
            const element1 = con2.querySelector('.c4');
            const element2 = con2.querySelector('.c4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('d4') || e.target.classList.contains('d4r')){
            pd4();
            const element1 = con2.querySelector('.d4');
            const element2 = con2.querySelector('.d4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('e4') || e.target.classList.contains('e4r')){
            pe4();
            const element1 = con2.querySelector('.e4');
            const element2 = con2.querySelector('.e4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('f4') || e.target.classList.contains('f4r')){
            pf4();
            const element1 = con2.querySelector('.f4');
            const element2 = con2.querySelector('.f4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('g4') || e.target.classList.contains('g4r')){
            pg4();
            const element1 = con2.querySelector('.g4');
            const element2 = con2.querySelector('.g4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('a4') || e.target.classList.contains('a4r')){
            pa4();
            const element1 = con2.querySelector('.a4');
            const element2 = con2.querySelector('.a4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('b4') || e.target.classList.contains('b4r')){
            pb4();
            const element1 = con2.querySelector('.b4');
            const element2 = con2.querySelector('.b4r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // ------------ crne --------------
        if(e.target.classList.contains('db4')){
            pdb4();
            const element = con2.querySelector('.db4');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('eb4')){
            peb4();
            const element = con2.querySelector('.eb4');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('gb4')){
            pgb4();
            const element = con2.querySelector('.gb4');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('ab4')){
            pab4();
            const element = con2.querySelector('.ab4');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('bb4')){
            pbb4();
            const element = con2.querySelector('.bb4');    
            element.classList.add('pressb');
        }
    });
    
    // -------------------------------------------------------------------------------------
    //---------------------------------------------- 2 MOUSEUP --------------
    
    con2.addEventListener('mouseup', (e)=>{
        if(e.target.classList.contains('c4') || e.target.classList.contains('c4r')){
            const element1 = con2.querySelector('.c4');
            const element2 = con2.querySelector('.c4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('d4') || e.target.classList.contains('d4r')){
            const element1 = con2.querySelector('.d4');
            const element2 = con2.querySelector('.d4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('e4') || e.target.classList.contains('e4r')){
            const element1 = con2.querySelector('.e4');
            const element2 = con2.querySelector('.e4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('f4') || e.target.classList.contains('f4r')){
            const element1 = con2.querySelector('.f4');
            const element2 = con2.querySelector('.f4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('g4') || e.target.classList.contains('g4r')){
            const element1 = con2.querySelector('.g4');
            const element2 = con2.querySelector('.g4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('a4') || e.target.classList.contains('a4r')){
            const element1 = con2.querySelector('.a4');
            const element2 = con2.querySelector('.a4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('b4') || e.target.classList.contains('b4r')){
            const element1 = con2.querySelector('.b4');
            const element2 = con2.querySelector('.b4r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // ------------ crne --------------
        if(e.target.classList.contains('db4')){
            const element = con2.querySelector('.db4');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('eb4')){
            const element = con2.querySelector('.eb4');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('gb4')){
            const element = con2.querySelector('.gb4');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('ab4')){
            const element = con2.querySelector('.ab4');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('bb4')){
            const element = con2.querySelector('.bb4');    
            element.classList.remove('pressb');
        }
    });
    
    // --------------------------------------------------------------------------------
    // ------------------------- 3 KEYDOWN ------------------
    
    document.addEventListener('keydown', (e)=>{
        if(e.key==='y'){
            pc5();
            const element1 = con3.querySelector('.c5');
            const element2 = con3.querySelector('.c5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        if(e.key==='u'){
            pd5();
            const element1 = con3.querySelector('.d5');
            const element2 = con3.querySelector('.d5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='i'){
            pe5();
            const element1 = con3.querySelector('.e5');
            const element2 = con3.querySelector('.e5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='o'){
            pf5();
            const element1 = con3.querySelector('.f5');
            const element2 = con3.querySelector('.f5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='p'){
            pg5();
            const element1 = con3.querySelector('.g5');
            const element2 = con3.querySelector('.g5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key==='['){
            pa5();
            const element1 = con3.querySelector('.a5');
            const element2 = con3.querySelector('.a5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.key===']'){
            pb5();
            const element1 = con3.querySelector('.b5');
            const element2 = con3.querySelector('.b5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // ------------ crne --------------
        if(e.key==='7'){
            pdb5();
            const element = con3.querySelector('.db5');    
            element.classList.add('pressb');
        }
        if(e.key==='8'){
            peb5();
            const element = con3.querySelector('.eb5');    
            element.classList.add('pressb');
        }
        if(e.key==='0'){
            pgb5();
            const element = con3.querySelector('.gb5');    
            element.classList.add('pressb');
        }
        if(e.key==='-'){
            pab5();
            const element = con3.querySelector('.ab5');    
            element.classList.add('pressb');
        }
        if(e.key==='='){
            pbb5();
            const element = con3.querySelector('.bb5');    
            element.classList.add('pressb');
        }
    })
    
    // --------------------------------------------------------------------------------
    // ------------------------- 3 KEYUP --------------------
    
    document.addEventListener('keyup', (e)=>{
        if(e.key==='y'){
            const element1 = con3.querySelector('.c5');
            const element2 = con3.querySelector('.c5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        if(e.key==='u'){
            const element1 = con3.querySelector('.d5');
            const element2 = con3.querySelector('.d5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='i'){
            const element1 = con3.querySelector('.e5');
            const element2 = con3.querySelector('.e5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='o'){
            const element1 = con3.querySelector('.f5');
            const element2 = con3.querySelector('.f5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='p'){
            const element1 = con3.querySelector('.g5');
            const element2 = con3.querySelector('.g5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key==='['){
            const element1 = con3.querySelector('.a5');
            const element2 = con3.querySelector('.a5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.key===']'){
            const element1 = con3.querySelector('.b5');
            const element2 = con3.querySelector('.b5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // ------------ crne --------------
        if(e.key==='7'){
            const element = con3.querySelector('.db5');    
            element.classList.remove('pressb');
        }
        if(e.key==='8'){
            const element = con3.querySelector('.eb5');    
            element.classList.remove('pressb');
        }
        if(e.key==='0'){
            const element = con3.querySelector('.gb5');    
            element.classList.remove('pressb');
        }
        if(e.key==='-'){
            const element = con3.querySelector('.ab5');    
            element.classList.remove('pressb');
        }
        if(e.key==='='){
            const element = con3.querySelector('.bb5');    
            element.classList.remove('pressb');
        }
    })
    
    // --------------------------------------------------------------------------------
    // --------------------------------------- 3 MOUSEDOWN -----------
    
    con3.addEventListener('mousedown', (e)=>{
        
        if(e.target.classList.contains('c5') || e.target.classList.contains('c5r')){
            pc5();
            const element1 = con3.querySelector('.c5');
            const element2 = con3.querySelector('.c5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('d5') || e.target.classList.contains('d5r')){
            pd5();
            const element1 = con3.querySelector('.d5');
            const element2 = con3.querySelector('.d5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('e5') || e.target.classList.contains('e5r')){
            pe5();
            const element1 = con3.querySelector('.e5');
            const element2 = con3.querySelector('.e5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('f5') || e.target.classList.contains('f5r')){
            pf5();
            const element1 = con3.querySelector('.f5');
            const element2 = con3.querySelector('.f5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('g5') || e.target.classList.contains('g5r')){
            pg5();
            const element1 = con3.querySelector('.g5');
            const element2 = con3.querySelector('.g5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('a5') || e.target.classList.contains('a5r')){
            pa5();
            const element1 = con3.querySelector('.a5');
            const element2 = con3.querySelector('.a5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('b5') || e.target.classList.contains('b5r')){
            pb5();
            const element1 = con3.querySelector('.b5');
            const element2 = con3.querySelector('.b5r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
        // ------------ crne --------------
        if(e.target.classList.contains('db5')){
            pdb5();
            const element = con3.querySelector('.db5');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('eb5')){
            peb5();
            const element = con3.querySelector('.eb5');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('gb5')){
            pgb5();
            const element = con3.querySelector('.gb5');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('ab5')){
            pab5();
            const element = con3.querySelector('.ab5');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('bb5')){
            pbb5();
            const element = con3.querySelector('.bb5');    
            element.classList.add('pressb');
        }
    });
    
    // -------------------------------------------------------------------------------------
    // ------------------------------------- 3 MOUSEUP ------------------------
    
    con3.addEventListener('mouseup', (e)=>{
        if(e.target.classList.contains('c5') || e.target.classList.contains('c5r')){
            const element1 = con3.querySelector('.c5');
            const element2 = con3.querySelector('.c5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('d5') || e.target.classList.contains('d5r')){
            const element1 = con3.querySelector('.d5');
            const element2 = con3.querySelector('.d5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('e5') || e.target.classList.contains('e5r')){
            const element1 = con3.querySelector('.e5');
            const element2 = con3.querySelector('.e5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('f5') || e.target.classList.contains('f5r')){
            const element1 = con3.querySelector('.f5');
            const element2 = con3.querySelector('.f5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('g5') || e.target.classList.contains('g5r')){
            const element1 = con3.querySelector('.g5');
            const element2 = con3.querySelector('.g5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('a5') || e.target.classList.contains('a5r')){
            const element1 = con3.querySelector('.a5');
            const element2 = con3.querySelector('.a5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('b5') || e.target.classList.contains('b5r')){
            const element1 = con3.querySelector('.b5');
            const element2 = con3.querySelector('.b5r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
        // ------------ crne --------------
        if(e.target.classList.contains('db5')){
            const element = con3.querySelector('.db5');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('eb5')){
            const element = con3.querySelector('.eb5');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('gb5')){
            const element = con3.querySelector('.gb5');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('ab5')){
            const element = con3.querySelector('.ab5');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('bb5')){
            const element = con3.querySelector('.bb5');    
            element.classList.remove('pressb');
        }
    });

    // --------------------------------------------------------------------------------
    // ------------------------- 4 KEYDOWN ------------------

    //       .................posle

    // --------------------------------------------------------------------------------
    // ------------------------- 4 KEYUP --------------------

    //       .................posle

    // --------------------------------------------------------------------------------
    // --------------------------------------- 4 MOUSEDOWN -----------
    
    con4.addEventListener('mousedown', (e)=>{
        
        if(e.target.classList.contains('c6') || e.target.classList.contains('c6r')){
            pc6();
            const element1 = con4.querySelector('.c6');
            const element2 = con4.querySelector('.c6r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('d6') || e.target.classList.contains('d6r')){
            pd6();
            const element1 = con4.querySelector('.d6');
            const element2 = con4.querySelector('.d6r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        if(e.target.classList.contains('e6') || e.target.classList.contains('e6r')){
            pe6();
            const element1 = con4.querySelector('.e6');
            const element2 = con4.querySelector('.e6r');
            element1.classList.add('press');
            element2.classList.add('press')
        }
    
        // ------------ crne --------------
        if(e.target.classList.contains('db6')){
            pdb6();
            const element = con4.querySelector('.db6');    
            element.classList.add('pressb');
        }
        if(e.target.classList.contains('eb6')){
            peb6();
            const element = con4.querySelector('.eb6');    
            element.classList.add('pressb');
        }
    });

    // -------------------------------------------------------------------------------------
    // ------------------------------------- 4 MOUSEUP ------------------------
    
    con4.addEventListener('mouseup', (e)=>{
        if(e.target.classList.contains('c6') || e.target.classList.contains('c6r')){
            const element1 = con4.querySelector('.c6');
            const element2 = con4.querySelector('.c6r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('d6') || e.target.classList.contains('d6r')){
            const element1 = con4.querySelector('.d6');
            const element2 = con4.querySelector('.d6r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        if(e.target.classList.contains('e6') || e.target.classList.contains('e6r')){
            const element1 = con4.querySelector('.e6');
            const element2 = con4.querySelector('.e6r');
            element1.classList.remove('press');
            element2.classList.remove('press');
        }
    
        // ------------ crne --------------
        if(e.target.classList.contains('db6')){
            const element = con4.querySelector('.db6');    
            element.classList.remove('pressb');
        }
        if(e.target.classList.contains('eb6')){
            const element = con4.querySelector('.eb6');    
            element.classList.remove('pressb');
        }
    });
// -------------------------------------------------------------------------------

const glitch = document.querySelector('.glitch-wrapper'); 
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

//--------------------------------------------------------------------------------

button1.addEventListener('click',()=>{
    button1.disabled = true;
    vinylBtn1.disabled = true;
    vinylBtn2.disabled = true;
    vinylBtn3.disabled = true;
    button1.classList.add('button-dis');
    vinylBtn1.classList.add('button-dis');
    vinylBtn2.classList.add('button-dis');
    vinylBtn3.classList.add('button-dis');
    vinylBtn2.removeEventListener('click', vinylBtn2Function);
    vinylBtn3.removeEventListener('click', vinylBtn3Function);
    glitch.classList.remove('zind');
    button1.classList.add('anim');
    //----------------------------------------------
    playTune(forElise)
    .then(()=> {
        button1.classList.remove('anim');
        glitch.classList.add('zind');
        button1.disabled = false;
        vinylBtn1.disabled = false;
        vinylBtn2.disabled = false;
        vinylBtn3.disabled = false;
        button1.classList.remove('button-dis');
        vinylBtn1.classList.remove('button-dis');
        vinylBtn2.classList.remove('button-dis');
        vinylBtn3.classList.remove('button-dis');
        vinylBtn2.addEventListener('click', vinylBtn2Function);
        vinylBtn3.addEventListener('click', vinylBtn3Function);
    })
});

button2.addEventListener('click',()=>{
    button2.disabled = true;
    vinylBtn1.disabled = true;
    vinylBtn2.disabled = true;
    vinylBtn3.disabled = true;
    button2.classList.add('button-dis');
    vinylBtn1.classList.add('button-dis');
    vinylBtn2.classList.add('button-dis');
    vinylBtn3.classList.add('button-dis');
    vinylBtn1.removeEventListener('click', vinylBtn1Function);
    vinylBtn3.removeEventListener('click', vinylBtn3Function);
    glitch.classList.remove('zind');
    button2.classList.add('anim');
    //----------------------------------------------
    playTune(bellaCiao)
    .then(()=> {
        button2.classList.remove('anim');
        glitch.classList.add('zind');
        button2.disabled = false;
        vinylBtn1.disabled = false;
        vinylBtn2.disabled = false;
        vinylBtn3.disabled = false;
        vinylBtn1.addEventListener('click',vinylBtn1Function);
        vinylBtn3.addEventListener('click',vinylBtn3Function);
        button2.classList.remove('button-dis');
        vinylBtn1.classList.remove('button-dis');
        vinylBtn2.classList.remove('button-dis');
        vinylBtn3.classList.remove('button-dis');
    })
})

button3.addEventListener('click',()=>{
    button3.disabled = true;
    vinylBtn1.disabled = true;
    vinylBtn2.disabled = true;
    vinylBtn3.disabled = true;
    button3.classList.add('button-dis');
    vinylBtn1.removeEventListener('click', vinylBtn1Function);
    vinylBtn2.removeEventListener('click', vinylBtn2Function);
    vinylBtn1.classList.add('button-dis');
    vinylBtn2.classList.add('button-dis');
    vinylBtn3.classList.add('button-dis');
    glitch.classList.remove('zind');
    button3.classList.add('anim');
    //----------------------------------------------
    playTune(luxAeterna)
    .then(()=> {
        button3.classList.remove('anim');
        glitch.classList.add('zind');
        button3.disabled = false;
        vinylBtn1.disabled = false;
        vinylBtn2.disabled = false;
        vinylBtn3.disabled = false;
        vinylBtn1.addEventListener('click',vinylBtn1Function);
        vinylBtn2.addEventListener('click',vinylBtn2Function);
        button3.classList.remove('button-dis');
        vinylBtn1.classList.remove('button-dis');
        vinylBtn2.classList.remove('button-dis');
        vinylBtn3.classList.remove('button-dis');
    })
})

// ------------------------------------------------

async function playTune(sequence) {
    for (const [duration, note, name] of sequence) {
        await tune(duration, note, name);
    }
}

// ------------------------------------------------

function tune(time, element,str){
    return new Promise((res,rej)=>{
        let keyR;
        let key = document.querySelector(`.${str}`);
        if(key){
            if(key.classList.contains('white')){
                keyR = document.querySelector(`.${str}r`);
            } 
        }
        
        if(element){
            setTimeout(()=>{  
                if(key){
                    if(key.classList.contains('white')){
                        key.classList.add('press');
                        keyR.classList.add('press');
                        if(str.includes('1')){
                            con01.classList.add('press');
                        }
                        if(str.includes('2')){
                            con0.classList.add('press');
                        }
                        if(str.includes('3')){
                            con1.classList.add('press');
                        }
                        if(str.includes('4')){
                            con2.classList.add('press');
                        }
                        if(str.includes('5')){
                            con3.classList.add('press');
                        }
                        if(str.includes('6')){
                            con4.classList.add('press');
                        }
                    } if(key.classList.contains('black')) {
                        key.classList.add('pressb')
                    }
                    element.load();
                    element.play();               
                    res();
                } else {
                    element.load();
                    element.play();               
                    res(); 
                }          
            },time);
            setTimeout(()=>{
                if(key){
                    if(key.classList.contains('white')){
                        key.classList.remove('press');
                        keyR.classList.remove('press');
                        if(str.includes('1')){
                            con01.classList.remove('press');
                        }
                        if(str.includes('2')){
                            con0.classList.remove('press');
                        }
                        if(str.includes('3')){
                            con1.classList.remove('press');
                        }
                        if(str.includes('4')){
                            con2.classList.remove('press');
                        }
                        if(str.includes('5')){
                            con3.classList.remove('press');
                        }
                        if(str.includes('6')){
                            con4.classList.remove('press');
                        }
                    } else{
                        key.classList.remove('pressb'); 
                    }
                }
            },time+400)
        } else {
            rej(new Error(`There was an error`));
        }
    })
}

//--------------------------------------------------------------

const vinylBtn1 = document.querySelector('.vinyl-btn1');
const vinylBtn2 = document.querySelector('.vinyl-btn2');
const vinylBtn3 = document.querySelector('.vinyl-btn3');

vinylBtn1.addEventListener('click', vinylBtn1Function);

function vinylBtn1Function(e){
    
    if(button2.classList.contains('show-btn')){
        button2.classList.remove('show-btn');
    }
    if(button3.classList.contains('show-btn')){
        button3.classList.remove('show-btn');
    }
    button1.classList.add('show-btn');
    if(!e.currentTarget.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.firstElementChild.classList.add('select-icon');
    }
    if(e.currentTarget.parentElement.nextElementSibling.firstElementChild.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.parentElement.nextElementSibling.firstElementChild.firstElementChild.classList.remove('select-icon');  
    }
    if(e.currentTarget.parentElement.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.parentElement.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.classList.remove('select-icon');  
    }
    if(!e.currentTarget.parentElement.classList.contains('tune-link')){
        e.currentTarget.parentElement.classList.add('tune-link')
    }
    if(e.currentTarget.parentElement.nextElementSibling.classList.contains('tune-link')){
        e.currentTarget.parentElement.nextElementSibling.classList.remove('tune-link');
    }
    if(e.currentTarget.parentElement.nextElementSibling.nextElementSibling.classList.contains('tune-link')){
        e.currentTarget.parentElement.nextElementSibling.nextElementSibling.classList.remove('tune-link');
    }
    if(vinylBtn2.classList.contains('btn-white')){
        vinylBtn2.classList.remove('btn-white');
    }
    if(vinylBtn3.classList.contains('btn-white')){
        vinylBtn3.classList.remove('btn-white');
    }
    vinylBtn1.classList.add('btn-white');
    glitch.classList.add('zind');
    glitch.classList.add('show-glitch')
}

vinylBtn2.addEventListener('click', vinylBtn2Function);

function vinylBtn2Function(e){
    if(button1.classList.contains('show-btn')){
        button1.classList.remove('show-btn');
    }
    if(button3.classList.contains('show-btn')){
        button3.classList.remove('show-btn');
    }
    button2.classList.add('show-btn');
    if(!e.currentTarget.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.firstElementChild.classList.add('select-icon');
    }
    if(e.currentTarget.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.remove('select-icon');  
    }
    if(e.currentTarget.parentElement.nextElementSibling.firstElementChild.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.parentElement.nextElementSibling.firstElementChild.firstElementChild.classList.remove('select-icon');  
    }
    if(!e.currentTarget.parentElement.classList.contains('tune-link')){
        e.currentTarget.parentElement.classList.add('tune-link');
    }
    if(e.currentTarget.parentElement.previousElementSibling.classList.contains('tune-link')){
        e.currentTarget.parentElement.previousElementSibling.classList.remove('tune-link');
    }
    if(e.currentTarget.parentElement.nextElementSibling.classList.contains('tune-link')){
        e.currentTarget.parentElement.nextElementSibling.classList.remove('tune-link');
    }
    if(vinylBtn1.classList.contains('btn-white')){
        vinylBtn1.classList.remove('btn-white');
    }
    if(vinylBtn3.classList.contains('btn-white')){
        vinylBtn3.classList.remove('btn-white');
    }
    vinylBtn2.classList.add('btn-white');
    glitch.classList.add('zind');
    glitch.classList.add('show-glitch')
}

vinylBtn3.addEventListener('click', vinylBtn3Function);

function vinylBtn3Function(e){
    if(button1.classList.contains('show-btn')){
        button1.classList.remove('show-btn');
    }
    if(button2.classList.contains('show-btn')){
        button2.classList.remove('show-btn');
    }
    button3.classList.add('show-btn');
    if(!e.currentTarget.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.firstElementChild.classList.add('select-icon');
    }
    if(e.currentTarget.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.classList.remove('select-icon');  
    }
    if(e.currentTarget.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.contains('select-icon')){
        e.currentTarget.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.remove('select-icon');  
    }
    if(!e.currentTarget.parentElement.classList.contains('tune-link')){
        e.currentTarget.parentElement.classList.add('tune-link');
    }
    if(e.currentTarget.parentElement.previousElementSibling.previousElementSibling.classList.contains('tune-link')){
        e.currentTarget.parentElement.previousElementSibling.previousElementSibling.classList.remove('tune-link');
    }
    if(e.currentTarget.parentElement.previousElementSibling.classList.contains('tune-link')){
        e.currentTarget.parentElement.previousElementSibling.classList.remove('tune-link');
    }
    
    if(vinylBtn1.classList.contains('btn-white')){
        vinylBtn1.classList.remove('btn-white');
    }
    if(vinylBtn2.classList.contains('btn-white')){
        vinylBtn2.classList.remove('btn-white');
    }
    vinylBtn3.classList.add('btn-white');
    glitch.classList.add('zind');
    glitch.classList.add('show-glitch')
}

//---------------------------------------------------------------

const bookBtn = document.querySelector('.button-book');
const sub = document.querySelector('.submenu');
const section = document.querySelector('.section');
const instruction = document.querySelector('.instruction');

bookBtn.addEventListener('mouseover', ()=>{
    sub.classList.add('show-sub')
    instruction.classList.add('disappear');   
})

section.addEventListener('mouseover',(e)=>{
    if (e.target.classList.contains('white-rest') || e.target.classList.contains('black') || e.target.classList.contains('con1') || e.target.classList.contains('section')){
        sub.classList.remove('show-sub');
    } 
})
