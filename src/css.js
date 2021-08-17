const string = `
.skin *{box-sizing: border-box;margin: 0; padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
.skin{
    position: relative;
    background-color: #ffe600;
    min-height: 100vh;

}
.nose{
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 4;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 100ms infinite;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
}
.eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top:100px;
    margin-left: -32px;
    background-color: #464646;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    left: 4px;
    top: 2px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;    
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background-color: #ffe600;
}
.mouth .up .lip.left{  
    border-radius: 0 0 0 50px;   
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{    
    border-radius: 0 0 50px 0;   
    transform: rotate(15deg) translateX(53px);    
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip.right::before{  
    left: -6px;
}
.mouth .down{
    height: 180px;
    position: absolute;
    width:100%;
    top: 0px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    margin-left: -75px;
    bottom: 0;
    left:50%;
    border-radius: 75px/300px;
    background-color: rgb(155, 0, 10);
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background-color: rgb(255, 72, 95);
    border-radius: 100px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
}
.face.left{
    transform: translateX(-180px);
    background-color: #f00;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background-color: #f00;
    border-radius: 50%;
}
`
export default string;