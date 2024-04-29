*{
    margin: 0;
    padding: 0;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    box-sizing: border-box;
}
.hero{
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(45deg,#1d0000,#20205b);
    display: flex;
    align-items: center;
    justify-content: center;
}
.calendar{
    width: 300px;
    height: 250px;
    display: flex;
    align-items: center;
    border-radius: 10px ;
    background: #fff;
}
.left, .right{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-direction: column;
}
.right{
    background: #f4351e;
    color: #fff;
    width: 42%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.left{
    width: 58%;
    
}
#date{
    font-size: 100px;
    line-height: 90px;
}

