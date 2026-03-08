//搜索内容
function ok(){
    let find = document.getElementById("find").value;
    if(find == "你好"){
    //1
        alert("你好");
    }
    else if(find == "hello"){
    //2
        alert("hello");
    }
    else if(find == "尼哥"){
    //3
        alert("你妈");
    }
    else if(find == "马帅"){
    //4
        window.open("pedia/MS.html");
    }
    else if(find == "马帅工作室"){
    //5
        alert("制作中");
    }
    else if(find == "YouTube"){
    //6
        alert("一个伟大的视频软件！也是世界上最大的视频软件！");
    }
    else if(find == "去Grokipedia"){
    //7
        window.open("grokipedia.com");
    }
    else if(find == "我现在很愤怒"){
        //8随机测试
        const random = Math.random();
        if(random < 0.3) {
           alert("首先您需要冷静") ;
        }
        else if(random < 0.65){
            alert("请冷静");
        }
        else{
            alert("⚠️现在首要任务是冷静下来！");
        }
    }
    else if(find == "我不好"){
    //9
        alert("发生什么了？");
    }
    else if(find == "Grokipedia"){
        //10
        alert("马斯克势必打败维基百科的第一步");
    }
    else if(find == "Wikipedia"){
    //11
        alert("当今世界上最大的百科软件/网站");
    }
    else if(find == "不三不四中学"){
    //12
        alert("形容一个学校");
    }
    else if(find == "学校"){
        //13
        alert("未成年学习的地方");
    }
    else if(find == "年龄"){
    //14_判定句式-年龄
        let age=prompt("输入年龄");      
        if(age >= 361) {
            alert("请输入合理年龄");
        }    
        else if(age == 360){
            alert("感谢您一生为美国而战，您应该继续领取医保");
            window.open("pedia/yibaoM.html")
        }
        else if(age >= 100){
            alert("百岁老人您好，欢迎你能拜访我们的网站");
        }
        else if(age >= 18) {
            alert("您成年了");
        }
        else if(age <= -1){
            alert("⚠️请输入正常年龄！");
        }
        else if(age <=17 && age >= 0 ){
            alert("您未成年");
        }
        else {
          alert("请输入合理年龄")
        }
    }
    else if(find == "github"){
    //15
        alert("众多来自全世界上的提议，仓库，文件，代码等等");
    }
    else if(find == "前往github"){
    //16
        window.open("https://github.com");
    }
    else if(find == "github.com"){
    //17
        window.open("https://github.com");
    }
    else if(find == "Minecraft官网"){
    //18
        window.open("https://minecraft.net");
    }
    else if(find == "我的世界官网"){
    //19
        window.open("https://mc.163.com")
    }
    else if(find == "stop"){
      //20
      alert("No!")
    }
    else if(find == "鸡"){
      //21
      alert("一种活着的生物，可以吃，有的会下蛋");
    }
    else if(find == "鸡仔"){
      //22
      alert("需要大约21天用可孵出鸡的蛋来孵");
    }
    else if(find == "oh shit"){
      //23
      alert("nah!");
    }
    else if(find == "X"){
      //24
        window.open("pedia/X.html");
    }
    else if(find == "特朗普"){
      //25
      alert("美利坚合众国第45届和第47届总统");
    }
    else if(find == "Trump"){
      //26
      alert("特朗普，或许伟大");
    }
    else if(find == "罗斯福"){
      //27
      alert("世界公认的一位伟大的美国总统");
    }
    else if(find == "基督教"){
      //28
      alert("世界第一大教");
    }
    else if(find == "伊斯兰教"){
      //29
      alert("世界第二大教");
    }
    else if(find == "佛教"){
      //30
      alert("世界第三大教");
    }
    else if(find == "东正教"){
      //31
      alert("基督教的一个分支");
    }
    else if(find == "天主教"){
      //32
      alert("基督教的一个分支");
    }
    else if(find == "bullshit"){
      //33
      alert("胡说八道");
    }
    else if(find == "红眼大耗子"){
      //34
      alert("一种生物");
    }
    else if(find == "参与内测"){
      window.open("pedia/searchv2test.html")
    }
    else{
        window.open("worry.html");
    }
}