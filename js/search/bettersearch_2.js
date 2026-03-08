// 搜索数据
//about 65% made by deepseek 
        const searchData = [
//马帅
            { 
                title: "马帅", 
                description: "马帅是什么？它是一种虚拟生物，是马的一个变种", 
                keywords: ["动物", "生物", "养殖场", "马帅"],
                category: "马帅"
            },
//游戏
            { 
                title: "马帅养殖场2", 
                description: "godot4制作的3d游戏", 
                keywords: ["godot", "农场", "养殖场", "马帅","游戏"],
                category: "游戏",
            },
            { 
                title: "马帅快快跑", 
                description: "Godot4制作的3d跑酷游戏", 
                keywords: ["马帅", "godot", "3d", "跑酷"],
                category: "游戏",
            },
            { 
                title: "洞穴跑酷", 
                description: "Godot4制作的2d跑酷游戏，是jiasas的独游", 
                keywords: ["跑酷", "godot", "3d", "游戏"],
                category: "游戏",
            },
//软件
            { 
                title: "YouTube", 
                description: "世界上最大的视频软件", 
                keywords: ["视频", "软件", "YouTube", "油管"],
                category: "软件",
            },
            { 
                title: "X", 
                description: "推特", 
                keywords: ["软件", "推特", "宇宙", "天空"],
                category: "软件",
                action: function(){
                  window.open("pedia/X.html");
                }
            },
            { 
                title: "wikipedia", 
                description: "维基百科，当今世界上最大最著名的百科软件/网站", 
                keywords: ["网站", "维基百科", "软件", "百科","wiki"],
                category: "软件",
            },
//网站
            { 
                title: "Grokipedia", 
                description: "最新的百科网站，马斯克打败维基百科的第一步", 
                keywords: ["维基百科", "马斯克", "gork", "百科","wiki","网站"],
                category: "网站",
                action: function(){
                  window.open("pedia/grokipedia.html");
                }
            },
//宗教
            { 
                title: "基督教", 
                description: "世界上最大的宗教", 
                keywords: ["宗教", "信仰", "基督教"],
                category: "宗教",
            },
            { 
                title: "佛教", 
                description: "世界上第三大的宗教", 
                keywords: ["宗教", "信仰", "佛教"],
                category: "宗教",
            },
            { 
                title: "伊斯兰教", 
                description: "世界上第二大的宗教", 
                keywords: ["宗教", "信仰", "伊斯兰教"],
                category: "宗教",
            },
            { 
                title: "东正教", 
                description: "分布在俄罗斯附近的宗教，是基督教的一个分支", 
                keywords: ["宗教", "信仰", "基督教","东正教"],
                category: "宗教",
            },
            { 
                title: "天主教", 
                description: "基督教的一个分支", 
                keywords: ["宗教", "信仰", "基督教","天主教"],
                category: "宗教",
            },
//年龄(其他)
            { 
                title: "年龄", 
                description: "年龄是人活了的时间，年份（点击我输入年龄以查看您的年龄分类）", 
                keywords: ["年龄", "年份"],
                category: "其他",
                action: function(){
                  //搜索年龄判断
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
                    alert("请输入合理年龄");
                    }
                }
            },
//国家
            { 
                title: "中国🇨🇳", 
                description: "东亚第一大国，五常之一", 
                keywords: ["世界", "国家", "亚洲","中国"],
                category: "国家",
            },
            { 
                title: "美国🇺🇸", 
                description: "世界第一大国，五常之一（建立者）", 
                keywords: ["世界", "国家", "北美洲","美国"],
                category: "国家",
            },
            { 
                title: "俄罗斯🇷🇺", 
                description: "欧洲第一大国，五常之一", 
                keywords: ["世界", "国家", "欧洲","俄罗斯"],
                category: "国家",
            },
            { 
                title: "朝鲜🇰🇵", 
                description: "东亚大国", 
                keywords: ["世界", "国家", "亚洲","朝鲜","太阳"],
                category: "国家",
            },
            { 
                title: "印度🇮🇳", 
                description: "东亚大国，世界人口第一", 
                keywords: ["世界", "国家", "亚洲","印度"],
                category: "国家",
            },
            { 
                title: "韩国🇰🇷", 
                description: "东亚的发达国家", 
                keywords: ["世界", "国家", "亚洲","韩国"],
                category: "国家",
            },
            { 
                title: "日本☢️", 
                description: "东亚的岛，核弹数量：-2", 
                keywords: ["世界", "国家", "亚洲","日本"],
                category: "国家",
            },
            { 
                title: "英国🇬🇧", 
                description: "欧洲发达国家，五常之一", 
                keywords: ["世界", "国家", "欧洲","英国"],
                category: "国家",
            },
            { 
                title: "法国🇫🇷", 
                description: "欧洲发达国家，五常之一", 
                keywords: ["世界", "国家", "欧洲","法国"],
                category: "国家",
            },
            { 
                title: "德国🇩🇪", 
                description: "欧洲大国", 
                keywords: ["世界", "国家", "欧洲","德国"],
                category: "国家",
            },
//电子产品
            { 
                title: "小米手机", 
                description: "小米产品中的手机系列", 
                keywords: ["小米", "手机", "电子产品"],
                category: "电子产品",
                action: function(){
                  window.open("pedia/xiaomi.html");
                }
            },
//各大网站
            { 
                title: "谷歌官网", 
                description: "谷歌的官网", 
                keywords: ["谷歌", "网络", "世界", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://www.google.com");
                }
            },
            { 
                title: "百度官网", 
                description: "百度的官网", 
                keywords: ["百度", "网络", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://www.baidu.com");
                }
            },
            { 
                title: "淘宝官网", 
                description: "淘宝的官网", 
                keywords: ["淘宝", "购物", "闪购", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://www.taobao.com");
                }
            },
            { 
                title: "小米官网", 
                description: "小米的官网", 
                keywords: ["小米", "网络", "汽车" ,"手机", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://www.mi.com");
                }
            },
            { 
                title: "我的世界官网", 
                description: "我的世界中国版的官网", 
                keywords: ["电子游戏", "网络", "我的世界" ,"Minecraft", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://mc.163.com");
                }
            },
            { 
                title: "Minecraft官网", 
                description: "我的世界国际版（Minecraft）的官网", 
                keywords: ["微软", "网络", "电子游戏", "Minecraft","我的世界" , "网站"],
                category: "网站",
                action: function(){
                  window.open("https://www.minecraft.net");
                }
            },
            { 
                title: "微软官网", 
                description: "微软的官网", 
                keywords: ["微软", "网络", "世界", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://www.microsoft.com");
                }
            },
            { 
                title: "华为官网", 
                description: "华为的官网", 
                keywords: ["华为", "网络", "世界", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://www.huawei.com");
                }
            },
            { 
                title: "GitHub官网", 
                description: "谷歌的官网", 
                keywords: ["GitHub", "微软", "网络", "世界", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://github.com");
                }
            },
            { 
                title: "itch官网", 
                description: "itch的官网", 
                keywords: ["游戏", "平台", "网络", "独立开发", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://itch.io");
                }
            },
            { 
                title: "grokipedia官网", 
                description: "grokipedia的官网", 
                keywords: ["SpaceX", "网络", "世界", "grokipedia", "网站"],
                category: "网站",
                action: function(){
                  window.open("https://grokipedia.com");
                }
            },
//脏话
            { 
                title: "fuck", 
                description: "脏话", 
                keywords: ["脏话", "bad", "bad words"],
                category: "脏话",
            }
        ];

        // 获取DOM元素
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const suggestions = document.getElementById('suggestions');
        const results = document.getElementById('results');
        const exampleSpans = document.querySelectorAll('.examples span');

        // 当前选中的建议项索引
        let currentSuggestionIndex = -1;

        // 搜索框输入事件
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            
            if (query.length === 0) {
                suggestions.style.display = 'none';
                results.style.display = 'none';
                return;
            }
            
            // 获取匹配的建议
            const matchedSuggestions = getSuggestions(query);
            
            // 显示建议
            showSuggestions(matchedSuggestions);
        });

        // 搜索按钮点击事件
        searchButton.addEventListener('click', performSearch);

        // 搜索框回车事件
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                navigateSuggestions(1);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                navigateSuggestions(-1);
            }
        });

        // 示例关键词点击事件
        exampleSpans.forEach(span => {
            span.addEventListener('click', function() {
                searchInput.value = this.textContent;
                performSearch();
            });
        });

        // 获取匹配的建议
        function getSuggestions(query) {
            const matched = [];
            const lowerQuery = query.toLowerCase();
            
            searchData.forEach(item => {
                // 检查标题、描述或关键词是否包含查询词
                if (item.title.toLowerCase().includes(lowerQuery) || 
                    item.description.toLowerCase().includes(lowerQuery) ||
                    item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))) {
                    
                    // 避免重复添加
                    if (!matched.some(m => m.title === item.title)) {
                        matched.push(item);
                    }
                }
            });
            
            return matched.slice(0, 5); // 最多返回5条建议
        }

        // 显示建议
        function showSuggestions(suggestionsList) {
            if (suggestionsList.length === 0) {
                suggestions.style.display = 'none';
                return;
            }
            
            // 清空之前的建议
            suggestions.innerHTML = '';
            
            // 添加新建议
            suggestionsList.forEach((item, index) => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.setAttribute('data-index', index);
                
                // 根据类别设置图标
                let icon = '📚';
                if (item.category === '马帅') icon = '🐴';
                if (item.category === '软件') icon = '📱';
                if (item.category === '游戏') icon = '🎮';
                if (item.category === '其他') icon = 'ℹ️';
                if (item.category === '脏话') icon = '🚫';
                if (item.category === '网站') icon = '🌐';
                if (item.category === '宗教') icon = '🙏';
                if (item.category === '国家') icon = '🇺🇳';
                if (item.category === '电子产品') icon = '⌨️';
                
                suggestionItem.innerHTML = `
                    <div class="suggestion-icon">${icon}</div>
                    <div class="suggestion-text">
                        <div>${highlightMatch(item.title, searchInput.value)}</div>
                        <div class="suggestion-category">${item.category}</div>
                    </div>
                `;
                
                suggestionItem.addEventListener('click', function() {
                    // 如果有自定义action就执行，否则执行普通搜索
                    if (item.action && typeof item.action === 'function') {
                        item.action();
                    } else {
                        searchInput.value = item.title;
                        performSearch();
                    }
                });
                
                suggestions.appendChild(suggestionItem);
            });
            
            suggestions.style.display = 'block';
            currentSuggestionIndex = -1;
        }

        // 高亮匹配的文本
        function highlightMatch(text, query) {
            if (!query) return text;
            
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<span style="color: #3498db; font-weight: bold;">$1</span>');
        }

        // 导航建议项
        function navigateSuggestions(direction) {
            const suggestionItems = suggestions.querySelectorAll('.suggestion-item');
            
            if (suggestionItems.length === 0) return;
            
            // 移除之前的高亮
            if (currentSuggestionIndex >= 0) {
                suggestionItems[currentSuggestionIndex].classList.remove('active');
            }
            
            // 计算新的索引
            currentSuggestionIndex += direction;
            
            if (currentSuggestionIndex < 0) {
                currentSuggestionIndex = suggestionItems.length - 1;
            } else if (currentSuggestionIndex >= suggestionItems.length) {
                currentSuggestionIndex = 0;
            }
            
            // 添加高亮
            suggestionItems[currentSuggestionIndex].classList.add('active');
            
            // 更新搜索框内容
            const selectedTitle = searchData.find(item => 
                item.title === suggestionItems[currentSuggestionIndex].querySelector('.suggestion-text div').textContent
            ).title;
            
            searchInput.value = selectedTitle;
        }

        // 执行搜索
        function performSearch() {
            const query = searchInput.value.trim();
            
            if (query.length === 0) {
                return;
            }
            
            // 隐藏建议
            suggestions.style.display = 'none';
            
            // 获取匹配的结果
            const matchedResults = searchData.filter(item => {
                const lowerQuery = query.toLowerCase();
                return item.title.toLowerCase().includes(lowerQuery) || 
                       item.description.toLowerCase().includes(lowerQuery) ||
                       item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery));
            });
            
            // 显示结果
            showResults(matchedResults, query);
        }

        // 显示搜索结果
        function showResults(resultsList, query) {
            // 清空之前的结果
            results.innerHTML = '';
            
            if (resultsList.length === 0) {
                results.innerHTML = '<div class="result-item"><div class="result-title">未找到相关结果</div><div class="result-desc">请尝试使用其他关键词搜索</div></div>';
            } else {
                resultsList.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';
                    
                    resultItem.innerHTML = `
                        <div class="result-title">${highlightMatch(item.title, query)}</div>
                        <div class="result-desc">${highlightMatch(item.description, query)}</div>
                    `;
                    
                    // 添加点击事件 - 如果有自定义action就执行
                    resultItem.addEventListener('click', function() {
                        if (item.action && typeof item.action === 'function') {
                            item.action();
                        }
                    });
                    
                    results.appendChild(resultItem);
                });
            }
            
            results.style.display = 'block';
        }