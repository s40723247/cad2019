var tipuesearch = {"pages": [{'title': 'WEEK', 'text': '\n week2-5 \n week6-9 \n week10-14 \n week15-18 \n \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'week2-5', 'text': 'week2 \n \n 在自己的git hub建立新倉儲 cad2019 ，並且到mde.tw下載2019Fall可攜套件.7z \n 使用git config --global user.name "user name"與git config --global user.email " user email " 設定自己的名字與email \n 使用git submodule add新的指令 指令如下 ( git submodule add https://github.com/mdecourse/cmsimde.git cmsimde ) \n 輸入指令python -m pip install flask cors \n 開啟近端開始更新內容，更新完成使用一上所使用的 git指令(git status、git pull ..... ) \n \n \n week3 \n 1.\xa0 Y:\\portablegit\\bin\\sh.exe 重新命名為 sh_rename_for_solvespace.exe \n 2. 輸入 指令git clone\xa0 --recurse-submodules \n 3. 在cmakelist內之713及714行(加入#字號) \n 4. 進到 cd solvespace>cd extlib>cd libpng>mkdir build>cd build \n 5. 執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 6. 找 \xa0libpng.dll.a 更名，並更名名為 libpng_static.a \n 7. 回到 solvespace ,建立 build 後進入 build\xa0 \n 8.\xa0執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n week4 \n 補做之前未跟上的進度 \n week5 \n solvespace的基本操作練習 \n 1.先將 solvespace打開 \n 2.繪製一個35x35的方形 (快捷鍵D可以定義尺寸) \n 3.點選New group extruding active sketch (快捷鍵Shift+X) \n 4.旁邊小視窗會出現一個in 3D的字樣 \n 5.點選草圖然後按下滑鼠中鍵可以旋轉 \n 6.成功進入3D之後旁邊小視窗找到color，再旁邊會有一個change那就是可以改顏色的部分 \n 7.在color下有個opacity可以更改方塊的透明度 \n 8.基本的練習 (測量點到點的距離、隱藏座標、隱藏point的部分) \n \n 完成圖 \n \n 以下是練習影片 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'Week6-9', 'text': 'week6 \n 1.到課程網站中解壓縮web_vrep2與V-REP3 \n 2.打開V-REP3內的應用程式 \n 3.導入web_vrep2的two_wheeler.ttt檔案 \n 4.打開web_vrep2內的app.py按下GO \n 5.複製網址打開網頁 \n 6.操作車子 \n 教學影片 \n \n week7 \n 1.到E:\\tmp\\solvespace\\build\\src\\CMakeFiles\\solvespace.dir內刪除obj檔案 \n 2.E:\\tmp\\solvespace\\src尋找slovespace.cpp檔案進行編輯 \n 3.搜尋GPL 並把上面改成 compiled by 自己的學號 \n 4.再進入E:\\tmp\\solvespace\\build，輸入指令cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 5.輸入另一個指令mingw32-make \n 6.到E:\\tmp\\solvespace\\build\\bin裡面打開slevespace.exe \n 7.點選Help內的About確認是否編譯完成 \n \n solvespace零件繪製 \n \n \n week8 \n (1) \n 1.打開LEO並且把pelican.leo拖進去 \n 2.到 pelican設定的@edit貼上自己的biog網址 \n 3.對local-blog按右鍵Goto Script 複製裡面指令 \n 4.到自己資料夾內輸入這段指令 \n 5.到近端確認是否完成 \n \n \n (2) \n 1.首先先把start複製下來 \n 2.到2019/data/webots貼上剛剛複製的start \n 3.把剛剛複製的改名並且拖到編輯器裡面 \n 4.增加set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n 5.並在path=%..這段後面新增%path_webots% \n 6.在下面再新增一段start Y:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe \n 7.啟動 \n \n', 'tags': '', 'url': 'Week6-9.html'}, {'title': 'week10-14', 'text': 'week12 \n ch3   在本章中，將學習如何在NX 12中創建和編輯草圖。可以直接創建一個 在“建模”應用程序中的平面上繪製草圖。在大多數情況下，建模是從2D草圖開始的， 然後拉伸，旋轉或掃掠草圖以創建實體。許多複雜的形狀是\n否則，可以通過草繪輕鬆地建模非常困難的模型。在本章中，將看到\n草繪的一些概念，然後繼續草繪和建模某些零件。 \n 3.1概述 \n NX 12草圖是一組命名的曲線，這些曲線連接在一個字符串中，掃描後形成實體。的\n草圖表示該零件的外邊界。 曲線在草繪器中的平面上創建。\n首先，這些曲線的繪製沒有任何確切的尺寸。然後，維度\n應用約束和幾何約束以完全約束草圖。 這些將在本章稍後詳細討論。\n繪製完成後，可以使用多種方法來生成3D零件 • 草圖可以旋轉 \n • 草圖可以拉伸 •草圖可以沿參考線進行掃掠 \n 從草圖創建的特徵與之關聯， 如果草圖也會更改，特徵也會更改。 \n 使用草圖創建零件的優點是：\n•用於創建輪廓輪廓的曲線非常靈活，可用於建模\n不尋常的形狀。\n•曲線是參數化的，因此具有關聯性，可以輕鬆更改或刪除它們。\n•如果更改了繪製草圖的平面，則草圖將被更改\n相應地。\n•當您想要控制特徵的輪廓時，草圖非常有用，尤其是當它可能\n將來需要更改。草圖可以快速，輕鬆地進行編輯。 3.2草圖環境 在NX 12中，可以使用兩種方法創建草圖。 第一種方法在當前環境和應用。 For this \n ➢選擇菜單→插入→草圖 \n \n \n 在另一種方法中，可以使用 ➢在主工具欄中選擇草圖 \n 無論哪種情況，都會彈出一個對話框詢問\n定義草圖平面。屏幕將顯示草圖選項。可以選擇草圖平面， 草圖繪製方向和類型草圖的平面。 使用“創建草圖”對話框創建草圖時，可以選擇\n通過單擊所示的坐標係可以在其上創建草圖的平面。 這個將突出顯示您選擇的飛機。 選擇的默認平面是XC-YC。 但是，可以選擇在另一平面上繪製草圖。 如果有事先在模型中創建的任何實體特徵，任何平坦表面也可以用作草繪平面 \n ➢選擇XC-YC飛機並單擊確定 \n 將顯示草圖平面，並標記X-Y方向。 \n 主屏幕將更改為“草繪環境”。 XY平面突出顯示為\n用於草繪的默認平面。這是基本的草圖窗口。還有一個特殊的素描任務\nNX 12中的環境，它在主窗口中顯示所有草圖工具。 用於訪問草圖任務環境。 ➢單擊直接草圖工具欄區域中的更多選項 \n ➢在草圖任務環境中單擊打開，如下所示 \n 在完成標誌旁邊有三個有用的選項。你可以改變框中的草圖名稱。 下一個是東方素描從而將視圖定向到草圖平面。 如果模型文件是在草繪過程中旋轉，請單擊此圖標以查看\n在平行於屏幕的平面上繪製草圖重新附著將草圖附加到另一個平面上，\n基準平面或路徑，或更改草圖方向。它允許您將草圖重新附加到\n所需的平面，而無需重新創建所有曲線，尺寸和約束。 3.3草圖曲線工具欄 \n 該工具欄包含用於創建常用類型的圖標曲線和样條曲線，編輯，擴展，修剪，\n圓角等。每種類型的曲線都有不同的方法選擇和創建方法。 讓我們討論最多常用選項。 輪廓 \n 此選項會根據您在彈出工具欄中選擇的圖標創建直線和圓弧。 您可以使用坐標系或輸入長度和線的角度如下圖所示。 \n 線 \n 此選項將選擇性地僅創建直線。 \n 弧 \n 此選項通過兩種方法之一創建弧。 第一個選項以三個順序創建弧點如下圖所示。 \n \xa0 \n 第二個選項創建具有中心點，半徑和後掠角或按中心點的弧，帶有起點和終點圖示如下。 圓 \n 創建圓類似於創建圓弧，不同之處在於，圓是封閉的。 \n 快速修剪 \n 這將從曲線的交點修剪延伸的曲線。該選項顯示為如果每個實體與另一個實體相交， 則將它們拆分，並刪除 已選擇 該部分。 \n \xa0 \n Studio Spline \n 可以使用極點或通過點創建基本樣條曲線（B樣條曲線和Bezier）。\n所需的曲線度。樣條線將在第七章中詳細討論（自由格式特徵）。 3.4約束工具欄 \n \xa0 \n 所有曲線都是通過拾取點創建的。例如，一條直線有兩個點。\n在2D環境中，任何點都有兩個自由度，一個沿X，另一個沿Y\n軸。點的數量取決於要創建的曲線的類型。因此，曲線實體\n自由度數是其包含的點數的兩倍。 這些程度可以通過創建具有固定實體的約束來消除自由度。 實際上，建議通過刪除以下所有自由度（使草圖完全受約束）\n實體直接或間接地歸屬於固定實體。 可以通過賦予尺寸或幾何特性，如平行度，垂直度等。 \n 在NX 12中，智能約束是自動應用的，即自動尺寸或幾何\n約束由NX 12解釋。您可以通過單擊“連續自動”來關閉此選項。\n尺寸如下圖所示。以下段落顯示瞭如何手動應用約束。 \n \xa0 \n 尺寸約束 \n 通過給尺寸賦予固定實體（例如軸）的尺寸，可以消除自由度，\n平面，坐標系或模型中創建的任何現有實體幾何。 這些尺寸可以是線性，徑向，角度等。 可以隨時編輯尺寸值在草圖繪製過程中，雙擊尺寸。 \n 幾何約束 \n 除了尺寸約束外，還可以給出一些幾何約束來消除自由程度。 它們包括平行，垂直，共線，同心，水平，垂直，等長等。 該軟件具有查找以下可能約束的能力所選實體。 例如，將約束應用到下圖中的行上平行於矩形的左側（該線最初與矩形成一定角度）。 \n \xa0 \n \n 顯示草圖約束 \n \n 單擊此圖標將顯示與該特定草圖中的實體相關的所有選項。\xa0 \n \n 顯示/刪除約束 \n \n 該窗口列出了與所選任何實體相關的所有約束和約束類型。\n可以刪除任何列出的約束或更改約束的順序。\n狀態行中顯示不受約束的自由度數。 所有應通過遵循約束模型來應用約束來消除這些約束。 \n \n \n 3.5範例 3.5-1 \n ➢ 繪製以下草圖 \n ➢在Z方向上將該草圖拉伸60 mm \n 3.5-2 ➢按照如下所示應用尺寸約束 \n \n 選擇所有尺寸。 \n 右鍵單擊並隱藏尺寸  \n 選擇菜單→編輯→移動對像或選擇 從功能區欄中移動曲線  \n 選擇所有曲線。您應該看到有四個物體 在選擇對像中選擇  \n 指定運動為距離  \n 在指定向量中選擇YC方向  \n 輸入距離為0.5英寸  \n 在結果對話框中，確保單擊 複製原始單選按鈕  \n 點擊確定  \n 然後使用 基本曲線以完成草圖 \n \n \n \xa0 \n \n 草圖已準備好後: \n \n 選擇編輯→移動對像或從功能區欄中選擇移動曲線 \n 選擇外部曲線。確保選擇曲線的所有四個部分  \n 在Y方向上將下部曲線移動-1.5英寸。 這一樣在YC負方向上1.5英寸 \n \n 這將在套管外部形成曲線。 \n ➢使用直線將此曲線與套管的內部曲線連接如圖所示，它將形成一條閉合鏈曲線。 \n 現在，將在較小的一側創建套管外部所需的曲線，這將形成凸緣部分。 \n \n 選擇編輯→移動對象  \n 選擇外線，如下圖所示 \n \n \n \n 在XC方向上將下部曲線移動-0.5英寸。 這一樣在XC負方向上0.5英寸 \n 使用直線將兩條線連接起來，如右圖所示 \n 單擊完成標誌  \n 保存並關閉文件 \n \n 3.6 練習 \n 3.6.1 圓形底座 \n \n 3.6.2固定器的草圖 \n \xa0WEEK13 \n webots\xa0 tutorial 1 \n tutorial 1 : https://cyberbotics.com/doc/guide/tutorial-1-your-first-simulation-in-webots \n \n 1.先創立一個資料夾 \n 2.建立一個新的世界 \n 3.設定方格參數與圍牆高度 \n 4.建立三個木塊 \n 5.建立一個機器人 \n 6.物理施力的模擬 \n 7.建立程式控制器 \n 8.導入機器人內 \n \n \xa0 \n \n \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': 'inventor', 'text': '\n 是美國 AutoDesk 公司推出的一款三維可視化實體模擬軟件 Autodesk Inventor Professional （AIP），目前已推出最新版本AIP2019。同時還推出了iphone版本，在 app store 有售。 Autodesk Inventor Professional包括Autodesk Inventor三維設計軟件；基於AutoCAD平台開發的二維機械製圖和詳圖軟件AutoCAD Mechanical；還加入了用於纜線和束線設計、管道設計及PCB IDF文件輸入的專業功能模塊，並加入了由業界領先的ANSYS技術支持的 FEA 功能，可以直接在Autodesk Inventor軟件中進行應力分析。 在此基礎上，集成的數據管理軟件Autodesk Vault-用於安全地管理進展中的設計數據。 \n 1 應用 \n 由於Autodesk Inventor Professional集所有這些產品於一體，因此提供了一個 無風險 的 二維到三維 轉換路徑，您能以自己的進度轉換到三維，保護的二維圖形和知識投資，並且清楚地知道自己在使用目前市場上 DWG 兼容性最強的平台。Autodesk Inventor Professional軟件是一套全面的設計工具，用於創建和驗證完整的數字樣機；幫助製造商減少物理樣機投入，以更快的速度將更多的創新產品推向市場。 \n 為 適用於設計流程的理想工具 及 滿足設計需求的專用工具 \n 2 運動仿真 \n 借助Autodesk Inventor Professional的運動仿真功能，用戶能了解機器在真實條件下如何運轉，而能節省花費在構建物理樣機上的成本、時間和高額的諮詢費用。 \n 用戶可以據實際工況添加載荷、摩擦特性和運動約束，然後通過運行仿真功能驗證設計。 借助與應力分析模塊的無縫集成，可將工況傳遞到某一個零件上，來優化零部件設計。 \n 3 增強功能仿真 \n 借助 Autodesk Inventor Professional 的 運動仿真功能 ，用戶能了解機器在真實條件下如何運轉，而能節省花費在構建物理樣機上的成本、時間和高額的諮詢費用。 \n 用戶可以據實際工況添加載荷、摩擦特性和運動約束，然後通過運行仿真功能驗證設計。 借助與應力分析模塊的無縫集成，可將工況傳遞到某一個零件上，來優化零部件設計。 \n \n （ 增強功能 ）有輸出到應力分析中、 約束轉換、 載荷定義、可視化、點軌跡、圖示器、模型簡化、薄壁件處理、將分析數據導入ANSYS。 \n 4 布管設計 \n Autodesk Inventor? Professional可以幫助用戶節約創建管材、管件和軟管所需要的時間。 \n 使用Autodesk Inventor? Professional中規範的布管工具來選擇合適的配件，確保管路符合最小和最大長度、舍入增量和彎曲半徑這三類設計規則。 \n 5 線束設計 \n 從電路設計軟件（包括 AutoCAD Electrical 軟件）導出的導線表，Autodesk Inventor? Professional 可以接續進行電纜和線束設計。 \n 將電纜與線束（包括軟質排線）集成到數字樣機中，用戶可以準確計算路徑長度，避免過小的彎曲半徑，並確保電氣零部件與機械零部件匹配，從而節約大量時間和成本。 \n 6 CAD集成 \n Autodesk Inventor Professional能夠幫助用戶充分利用原有的AutoCAD 技能和DWG 設計數據，從而體驗數字樣機帶來的種種優勢。 \n Autodesk Inventor Professional集成了業界領先的二維和三維設計功能。 無需使用 數據轉換器 ，利用DWG TrueConvert就能直接讀寫DWG文件，同時還能保持與 三維模型 的關聯性。 \n 借助Autodesk Inventor Professional，用戶可以輕鬆訪問原有的二維信息，重複利用寶貴的設計數據。 此外，由於用戶可以將Inventor 的工程圖保存為DWG 文件，因此他們可以將從數字樣機中獲得的分析結果與那些使用AutoCAD 軟件的合作夥伴及供應商共享。 從三維零件和裝配設計中生成的視圖，如示意圖和工廠佈置圖等，也可以與AutoCAD 數據相集成。 用戶可以通過插入新的三維設計視圖來更新原有的二維工程圖，以降低升級現有設備的成本。 \n 7 零件設計 \n Inventor 可以幫助設計人員更為輕鬆地重複利用已有的設計數據，生動地表現設計意圖。借助其中全面關聯的模型，零件設計中的任何變化都可以反映到裝配模型和工程圖文件中。由此，設計人員的工作效率將得到顯著提高。 \n Inventor 可以使經常使用的自定義特徵和零件的設計標準化和系列化，從而提高客戶的生產效率。 利用Inventor 中的iPart技術，設計公司可以輕鬆設置智能零件庫，以確保始終以同種方式創建常用零件。 \n 8 鈑金設計 \n Autodesk Inventor 能夠幫助用戶簡化複雜鈑金零件的設計。 \n Inventor 中的數字樣機結合了加工信息（如沖壓工具參數和自定義的折彎表）、精確的鈑金折彎模型以及展開模型編輯環境。 在展開模型編輯環境中，製造工程師可以對鈑金展開模型進行細微的改動。 因此能夠幫助用戶提高設計鈑金零件的效率。 \n \n 9 裝配設計 \n Inventor將設計加速器與易於使用的裝配工具相結合，使用戶可以確保裝配設計中每一個零部件的安裝正確。 \n 精確地驗證干涉情況和各種屬性，以便一次性創建高質量的產品。 Inventor提供的強大工具可有效控制和管理大型裝配設計中創建的數據，因此用戶只需專心工作在所關心的部分零部件上。 \n 10 工程圖 \n Autodesk Inventor 中包含從數字樣機中生成工程設計和製造文檔的全套工具。這些工具可減少設計錯誤，縮短設計交付時間。 \n Inventor 中的自動創建視圖功能和繪圖工具將工程圖的繪製效率提高到了新的水平。 \n 此外，Inventor還支持所有主流的繪圖標準，與 三維模型 的完全關聯（在出現設計變更時，工程圖將同步更新），以及 DWG 輸出格式，因此是創建和共享DWG工程圖的理想選擇。 \n 11 數據管理 \n Inventor 使設計數據可以高效、安全的進行交換，支持不同工程相關方（包括工業設計、產品設計和製造）之間的協作。 \n 這種功能支持設計工作組管理和跟踪一個數字樣機中的所有零部件設計，幫助他們更出色地重用關鍵的設計數據、管理BOM 表、及早實現製造團隊與客戶間的協作。 \n 通過一系列全面的本地格式轉換器， Inventor具有了出色的互操作性。 在那些有部分三維數據來源於其它CAD系統的項目中，企業也可以積極參與，並滿足客戶對於其它本地格式 三維模型 的要求。 \n \xa0 \n 12 自動化 \n Inventor 可以幫助用戶從三維軟件投資中獲得最大回報。Inventor API（應用編程接口）可以自動化常用的操作，並按照設計標準和工程流程實現特有流程的自動化。 \n 借助可編輯的樣式，用戶可以創建符合標準的工程圖，向資源中心發布自定義的零件，以確保設計者在設計中使用合適的零件，從而提高設計速度和工作效率。 \n 13 學習資源 \n Inventor 提供了豐富的學習和參考資源，旨在幫助用戶掌握使用技巧，充分發揮三維設計環境的優勢。 \n 借助Inventor ，用戶可以學習新技巧，查找關於操作流程或工具的信息，獲得最新提示和訣竅。 \n 14版本歷史 \n Autodesk Inventor R1 Mustang 1999/9/20 Autodesk Inventor R2 Thunderbird 2000/3/1 Autodesk Inventor R3 Camaro 2000/8/1 Autodesk Inventor R4 Corvette 2000/12/1 Autodesk Inventor R5 Durango 2001/9 /17 Autodesk Inventor R6 Viper 2002/10/15 Autodesk Inventor R7 Wrangler 2003/4/18 Autodesk Inventor R8 Cherokee 2003/10/15 Autodesk Inventor R9 Crossfire 2004/7/15 Autodesk Inventor R10 Freestyle 2005/4/6 Autodesk Inventor R11 Faraday 2006/4/6 Autodesk Inventor 2008 Goddard 2007/4/11 Autodesk Inventor 2009 Tesla 2008/4/16 Autodesk Inventor 2010 Hopper 2009/2/27 Autodesk Inventor 2011 Sikorsky 2010/3/26 Autodesk Inventor 2012 Brunel 2011/3/22 Autodesk Inventor Professional 2013 發佈於2012 Autodesk Inventor Professional 2014 發佈於2013 Autodesk Inventor Professional 2013 發佈於2012-06-25 Autodesk Inventor Professional 2012 發佈於2011-04-15 Autodesk Inventor Professional 2011 發佈於2010-04-23 Autodesk Inventor Professional 2010 發佈於2009-04-26', 'tags': '', 'url': 'inventor.html'}, {'title': 'Pro-e', 'text': '\n pro-e是Pro/Engineer的簡稱，更常用的簡稱是ProE或Pro/E，Pro/E是美國參數技術公司（Parametric Technology Corporation，簡稱PTC）的重要產品，在目前的三維造型軟件領域中佔有著重要地位。 \n pro-e作為當今世界機械CAD/CAE/CAM領域的新標準而得到業界的認可和推廣，是現今主流的模具和產品設計三維CAD/CAM軟件之一。 \n Pro/ENGINEER在2010年8月改名為「 Creo Elements/Pro 」 \n 2011年6月再改名為「 Creo Parametric 」 \n 主要特性 :\xa0 \n Pro/E第一個提出了 參數化設計 的概念，並且採用了單一數據庫來解決特徵的相關性問題。另外，它採用模塊化方式，用戶可以根據自身的需要進行選擇，而不必安裝所有模塊。 Pro/E的基於特徵方式，能夠將設計至生產全過程集成到一起，實現並行工程設計。它不但可以應用於工作站，而且也可以應用到單機上。 \n Pro/E採用了模塊方式，可以分別進行 草圖繪製 、 零件製作 、 裝配設計 、 鈑金設計 、 加工處理 等，保證用戶可以按照自己的需要進行選擇使用。 \n 1.參數化設計 \n 相對於產品而言，可以把它看成幾何模型，而無論多麼複雜的幾何模型，都可以分解成有限數量的構成特徵，而每一種構成特徵，都可以用有限的參數完全約束，這就是參數化的基本概念。 \n 2.基於特徵建模 \n Pro/E是基於特徵的實體模型化系統，工程設計人員採用具有智能特性的基於特徵的功能去生成模型如腔、殼、倒角及圓角，您可以隨意勾畫草圖，輕易改變模型。這一功能特性給工程設計者提供了在設計上從未有過的簡易和靈活，特別是在設計系列化產品上更是有得天獨到的優勢 \n 3.單一數據庫 \n Pro/Engineer是建立在統一基層上的數據庫上，不像一些傳統的CAD/CAM系統建立在多個數據庫上。所謂 單一數據庫 ，就是工程中的資料全部來自一個庫，使得每一個獨立用戶在為一件產品造型而工作，不管他是哪一個部門的。換言之，在整個設計過程的任何一處發生改動，亦可以前後反應在整個設計過程的相關環節上。例如，一旦工程詳圖有改變，NC（數控）工具路徑也會自動更新；組裝工程圖如有任何變動，也完全同樣反應在整個三維模型上。這種獨特的數據結構與工程設計的完整的結合，使得一件產品的設計結合起來。這一優點，使得設計更優化，成品質量更高，產品能更好地推向市場，價格也更便宜。 \n 4.直觀裝配管理 \n Pro/ENGINEER的基本結構能夠使您利用一些直觀的命令，例如“貼合”、“插入”、“對齊”等很容易的把零件裝配起來，同時保持設計意圖。高級的功能支持大型複雜裝配體的構造和管理，這些裝配體中零件的數量不受限制。 \n 5.易於使用 \n 菜單以直觀的方式聯級出現，提供了邏輯選項和預先選取的最普通選項，同時還提供了簡短的菜單描述和完整的在線幫助，這種形式使得容易學習和使用。 \n *歷史版本 \n \n \n \n Pro/ENGINEER Release 1.0 \n 1 \n 1987年 \n \n \n Pro/ENGINEER Release 8.0 \n 8 \n 1991年 \n \n \n Pro/ENGINEER Release 9.0 \n 9 \n 1992年 \n \n \n Pro/ENGINEER Release 10.0 \n 10 \n 1993年 \n \n \n Pro/ENGINEER Release 11.0 \n 11 \n 1993年 \n \n \n Pro/ENGINEER Release 12.0 \n 12 \n 1993年 \n \n \n Pro/ENGINEER Release 13.0 \n 13 \n 1994年 \n \n \n Pro/ENGINEER Release 14.0 \n 14 \n 1994年 \n \n \n Pro/ENGINEER Release 15.0 \n 15 \n 1995年 \n \n \n Pro/ENGINEER Release 16.0 \n 16 \n 1996年 \n \n \n Pro/ENGINEER Release 17.0 \n 17 \n 1997年 \n \n \n Pro/ENGINEER Release 18.0 \n 12 \n 1997年 \n \n \n Pro/ENGINEER Release 19.0 \n 19 \n 1998年 \n \n \n Pro/ENGINEER Release 20.0 \n 20 \n 1998年 \n \n \n Pro/ENGINEER 2000i \n 21 \n 1999年 \n \n \n Pro/ENGINEER 2000i2 \n 22 \n 2000年 \n \n \n Pro/ENGINEER 2001 \n 23 \n 2001年 \n \n \n Pro/ENGINEER Wildfire \n 24 \n 2002年 \n \n \n Pro/ENGINEER Wildfire 2.0 \n 25 \n 2004年 \n \n \n Pro/ENGINEER Wildfire 3.0 \n 27 \n 2006年 \n \n \n Pro/ENGINEER Wildfire 4.0 \n 29 \n 2008年 \n \n \n Pro/ENGINEER Wildfire 5.0 \n 31 \n 2009年 \n \n \n Creo Elements/Pro 5.0 （M065） \n 31 \n 2010年10月 \n \n \n Creo Parametric 1.0 \n 32 \n 2011年6月11日 \n \n \n Creo Parametric 2.0 \n 33 \n 2012年4月9日 \n \n \n Creo Parametric 3.0 \n 34 \n 2014年6月17日 \n \n \n Creo Parametric 4.0 \n 35 \n 2016年12月15日 \n \n \n \n \n', 'tags': '', 'url': 'Pro-e.html'}, {'title': 'Nx', 'text': '\n 1960年 \n 由 McDonnell Douglas Automation \xa0 公司成立。 \n 1976年， \n 收購了Unigraphics CAD/CAE/CAM系統的開發商——United Computing公司，UG的雛形問世。 \n 1983年 \n UG 正式 上市。 \n 1986年 \n Unigraphics 吸取了業界領先的、為實踐所證實的實體建模核心—— Parasolid 的部份功能。 \n 1989年 \n Unigraphics宣布支持 UNIX 平台及開放系統的結構，並將一個新的與STEP標準兼容的三維實體建模核心 Parasolid 引入 UG 。 \n 1990年 \n Unigraphics作為McDonnell Douglas（波音飛機公司）的機械CAD/CAE/CAM的標準。 \n 1991年 \n Unigraphics開始了從 CAD/CAE/CAM 大型機版本到工作站版本的轉移。 \n 1993年 \n \n Unigraphics引入 複合建模 的概念，可以實 體建模、曲線建模、框線建模、半參數化及參數化建模融為一體。 \n 1995年 \n Unigraphics 首次 發布了 Windows NT 版本。 \n 1996年 \n Unigraphics發布了能自動進行干涉檢查的高級裝配功能模塊、最先進的 CAM模塊 以及具有A類曲線造型能力的工業造型模塊：它在全球迅猛發展，占領了巨大的市場份額，已經成為高端及商業CAD/CAE/CAM應用開發的常用軟體。 \n 1997年 \n Unigraphics 新增了 包括 WAVE （幾何連結器）在內的一系列工業領先的新增功能。WAVE這一功能可以定義、控制、評估產品模板，被認為是在未來幾年中業界最有影響的新技術。 \n 2000年 \n Unigraphics發布了新版本的 UG17 ， 最新版本 的，是UGS成為 工業界第一個 可以裝載包含深層嵌入「 基於工程知識 」（KBE）語言的世界級MCAD軟體產品的供應商。 \n 2001年 \n Unigraphics發布了新版本 UG18 ，新版本對舊版本的對話框進行了調整，使得在最少的對話框中能完成更多的工作，從而簡化了設計。 \n 2002年 \n Unigraphics發布了 UG NX1.0 .新版本 繼承了UG18的優點，改進和增加了許多功能，使其功能更強大，更完美。 \n 2003年 \n Unigraphics發布了新版本 UG NX2.0\xa0 。新版本基於最新的行業標準，它是一個全新支持PLM的體系結構。EDS公司同其主要客戶一起，設計了這樣一個先進的體系結構，用於支持完整的產品工程。 \n 2004年 \n Unigraphics發布了新版本的 UG NX3.0 ，它為用戶的產品設計與加工過程提供了數字化造型和驗證手段，。它針對用戶的虛擬產品的設計和工藝設計的需要，提供經過實踐驗證的解決方案。 \n 2005年 \n Unigraphics發布了新版本的 UG NX4.0 . 它是嶄新的NX體系結構，使得開發與應用更加簡單和快捷。 \n 2007年 \n UGS公司發布了 NX 5.0\xa0 – NX的下一代數字產品開發軟體，幫助用戶以更快的速度開發創新產品，實現更高的成本效益。 \n 2008年 \n 6月，Siemens PLM Software發布 UG NX 6.0 ，建立在新的同步建模技術基礎之上的NX 6將在市場上產生重大影響。同步建模技術的發布標誌著NX的一個重要里程碑，並且向 MCAD 市場展示 Siemens 的鄭重承諾。 NX 6將為我們的重要客戶提供極大的生產力提高。 2009年 \n 10月 – 西門子工業自動化業務部旗下機構、全球領先的產品生命周期管理（PLM）軟體與服務提供商Siemens PLM Software 宣布推出其旗艦數字化產品開發解決方案NX 軟體的最新版。 UG NX 7.0 引入了「 HD3D 」（ 三維精確描述 ）功能，即一個開放、直觀的可視化環境，有助於全球產品開發團隊充分發掘PLM信息的價值，並顯著提升其制定卓有成效的產品決策的能力。此外， NX 7.0 還 新增了同步建模技術 的增強功能。修復了很多6.0所存在的漏洞，穩定性方面較6.0有很大的提升。 \n 2010年 \n 5月20日– Siemens PLM Software在 上海世博會 發布了功能增強的NX7最新版本（ UG NX 7.5 ），NX GC 工具箱將作為NX 7最新版本的一個應用模塊與NX 7一起同步發布。NX GC 工具箱是為滿足中國用戶對NX特殊需求推出的本地化軟體工具包。在符合國家標準（GB）基礎上，NX GC 工具箱做了進一步完善和大量的增強工作。 \n 2011年 \n 9月 - Siemens PLM Software發布了 UG NX 8.0 \n 2012年 \n 10月 - Siemens PLM Software發布了 UG NX 8.5 \n 2013年 \n 10月- Siemens PLM Software發布了 UG NX 9.0 \n 2014年 \n 8月- Siemens PLM Software發布了 UG NX 10.0 \n 2016年 \n 8月- Siemens PLM Software發布了 UG NX 11.0 \n 2017年 \n 10月- Siemens PLM Software發布了 UG NX 12.0', 'tags': '', 'url': 'Nx.html'}, {'title': 'solidworks', 'text': '\n 1993年 \n 創始人 Jon Hirschtick 招募了一個工程師團隊，旨在使3D CAD軟體更容易上手。Hirschtick從廣受好評的麻省理工學院二十一點隊的成員中籌得100萬美元，開始了他的新事業。該團隊的目標是構建一個基於 Windows平台 的易於使用且價格合理的軟體。這在當時真的是革命性的存在，當時所有其他流行的CAD系統都是在 Unix上構建 的。經過幾年的開發，最初發布的SolidWorks終於來了。 \n 1995年 \n 1.與其他CAD系統的18,000美元相比，SolidWorks的售價 僅為4,000美元 。 \n 2.該軟體更易於使用：與市場上其他CAD軟體相比，用戶只需 3個月 的使用經驗就可以輕 \n 3.鬆上手。易用性的很大一部分原因在於它採用了現代著名的Windows介面。 \n 4.模型的可視化是前所未有的。在光線充足的陰影環境中的構建功能與傳統建模空間形成 \n 5.鮮明對比，傳統建模空間僅顯示黑色背景下的線框。 \n 6.我們現在熟悉的類似 FeatureManager 用於顯示模型的構建歷史。 \n 7.零件，組件和圖紙從一開始就可用。用戶無法在組件中應用配合，但仍可將組件放置到位。 \n \n 1996年 \n 1.介紹了上下建模。允許使用自上而下的裝配建模方法。 \n 2.用戶現在可以在裝配中使用配合併捕捉動態裝配運動。除了干擾檢測，用戶還可以更輕 \n 3.鬆地驗證形狀，適合度和功能。 \n 4.拖放功能可將一個裝配體零部件移動到另一個裝配體中。 部分配置。 \n 5.自動化物料清單。只有一種方法沒有自定義選項，但它很有效。 \n 1997年 \n 1.鈑金功能首次發布。 \n 2.標準庫功能推出。 \n 3. Loft 功能現在可以使用引導曲線。 \n 4. SolidWorks \xa0 被 \xa0 Dassault Systemes （達索公司）收購。 \n 1997年二次修改 \n 1.面部圓角介紹。 \n 2.裝配配置。 \n 3.完全可定製的組件爆炸視圖。 \n 4.SolidWorks Viewer作為免費產品推出，可與非CAD用戶共享設計，並在與外部方共享 \n 5.數據時保護智慧財產權。 \n 1998年 \n 1.已發布功能面板，現在與設計庫的功能類似。可以拖放到模型上的預製功能。 \n 2.草圖診斷可幫助用戶理解草圖不適用於特定特徵的原因。 \n 3. Lofts 和 Sweeps 的相切控制。 \n 4.組合件封包(Assembly Envelopes)。 \n \n 1998二次修改 \n 1.智能配合在建造組件中更多地使用拖放式自動化。 \n 2.隨著用戶不斷建造越來越大的組件，輕量級組件可以幫助提高性能。 \n 3.表面處理工具首次推出。 \n 4 .FeatureWorks 用於導入文件，能夠更有效地使用來自其他軟體的現有3D數據。 \n 5.首次 CSWP 考試發布。它是手寫的，並通過郵件發送。 \n 1999年 \n 1. Palm Springs 的第一個SolidWorks World。 \n 2.拖動組件時對組件的實時碰撞檢測。 \n 3.3D草圖介紹。 \n 4.管道模塊發布。 \n 5.2D命令模擬器有助於縮小與以前AutoCAD用戶的差距。 \n 2000年 \n 1.發布 eDrawings 。 \n 2.實現了 Hole Wizard 接口。 \n 3.表面處理更有用，能夠編織，修剪和延伸表面。 \n 4.SolidWorks Explorer。 \n 5.動態間隙檢測可驗證裝配部件之間的最小間隙。 \n 2001年 \n 1.鏡像組件中的組件。 \n 2.引領互動。以前，在任何CAD系統中，只要選擇了命令，軟體就會在模型頂部顯示整個 \n 3.對話框。SOLIDWORKS開始廢除這一點，並轉向我們現在知道的 \n 4.PropertyManagers，並將陰影標註返回到模型。 \n 5.現在允許靈活的子組件進一步捕捉準確的裝配運動。 \n 6.介紹填充表面命令。 \n 7.DXF / DWG導入嚮導發布。 \n 8.3D Meeting（3D會議），最終在幾個版本之後退出。利用Microsoft Live Meeting並允許與螢幕共享進行實時同步會議。 \n 2001年二次修改 \n \n 1.運動模擬功能現在可以捕捉組件中移動的組件的實際物理動態。 \n 2.介紹大型裝配模式。 \n 3.實現了2D到3D轉換工具，以便將2D CAD數據輕鬆轉換為功能齊全的3D模型。 \n 4.介紹SolidWorks \xa0 Office，將常用的插件如 PhotoWorks ， Toolbox ， Utilities 和 \n 5.FeatureWorks打包成一個產品。 \n 6.Dassault Systemes收購了SRAC並開始將仿真引入主流設計流程。 \n 2003年 \n 1. COSMOSXpress 是第一款 Xpress 產品，它為每個桌面帶來了簡單的零件驗證。 \n 2.3DContentCentral為用戶提供了一個交互和共享模型的社區。 \n 3.多體零件設計。這是一個非常大的問題，現在是焊接，鈑金和模具設計的基礎。 \n 4.收購了 PDMWorks 並引入了SolidWorks Office Professional軟體包。開始將PDM作為 \n 5.每個客戶提供的一部分。 \n \n 2004年 \n 1.介面更新，包括 CommandManager ，彈出FeatureManager和PropertyManager和 \n 2.ConfigurationManager的管理器視圖選項卡。 \n 3.介紹了 Mold Tools （模具工具）和 Weldments （焊件）。 \n 4.實施Auto Balloon命令以匹配物料清單物料編號中的balloon編號。 \n 5.限制配合以捕捉更複雜的裝配運動。 \n 6.推出了 RealView Graphics ，以便隨時提供更逼真的圖像。 \n \n 2005年 \n 1.繪圖比較，為用戶提供工具來比較兩個圖紙之間的變化。 \n 2 .Flex 功能。 \n 3.電氣布線，與管道布線一起使用。 \n 4.在圖紙中自動標註，以捕捕捉模型中已定義的尺寸。 \n 5.能夠繪製無限的線條。 \n 6.SolidWorks Rx發布，旨在提供幫助技術支持更好地去識別問題。 \n \n 2006年 \n 1.發布 Smart Components 功能，允許為硬體之類的物件安裝智能裝配組件。 \n 2.介紹填充圖案。 \n 3.介紹草圖塊。 \n 4.顯示狀態。 \n 5.設計檢查器，允許用戶根據公司標準動態檢查他們的模型。 \n 6.添加了相機視圖功能。 \n 7.發布SolidWorks Office Premium（白金版）軟體包，包括 Routing ， COSMOSWorks8 .和 \xa0 COSMOSMotion 進行模擬，以及 ScanTo3D 。 \n \n 2007年 \n 1. SWIFT 工具可幫助設計人員在提供自動化解決方案時動態了解模型存在問題或錯誤的原因。 \n 2.可在組件中使用皮帶，鏈條和齒輪功能。 \n 3.用於表面處理的自由形式命令。 \n 4.介紹 Enterprise PDM 。 \n 2008年 \n 1.使用新的菜單欄和 CommandManager 布局對用戶介面進行全面檢修和現代化優化。上 \n 2.下工具欄和快捷工具欄首次可用。所有這些介面組件現在都可以完全自定義。 \n 3.Instant3D，提供拖動和操縱幾何體的功能，可輕鬆測試不同的設計概念。 \n 4.發布 TolAnalyst 。 \n 5.設計剪貼畫，通過剖析現有數據以便在另一個模型中重複使用，可以更輕鬆地重用現有的2D和3D數據。 \n 6.推出 DriveWorksXpress 和 DFMXpress 。 \n \n 2009年 \n 1.PhotoView360圖像渲染作為第一個渲染器引入，以訪問處理器的多核功能。 \n 2. SpeedPak 現在可用於簡化裝配中的組件。 \n 3.為追求更高目標，所以引入傳感器。 \n 4. CircuitWorks 發布並添加到SolidWorks Office Premium（白金版）軟體包中。 \n 5.發布 3DVIA Composer 。 \n 2010年 \n 1.現在提供可持續發展方案，幫助用戶了解其設計對環境的影響。 \n 2.快速標註尺寸使得創建細節圖更加容易。 \n 3.介紹基於事件的運動模擬。 \n 4.首次提供滑鼠手勢快捷鍵。 \n 5.現在可以進行多體鈑金建模。 \n \n 2011年 \n 1.PhotoView360完全集成到SolidWorks介面中。 \n 2.現在可以使用Walk-through（走查）功能。 \n 3.引入了 Defeature 工具以幫助限制模型中的智慧財產權數量。 \n 4.現在可以在 Simulation 中使用平面簡化。 \n 5.自動排列圖紙中的尺寸。 \n 2012年 \n 1.方程式編輯器經過徹底檢修後，更加用戶友好。 \n 2.介紹 Large Design Review 。 \n 3. Feature Freeze 現在可以讓用戶更好地控制性能。 \n 4.鈑金增強：邊線法蘭的更多選擇，引入掃描法蘭，使用的成型工具更加人性化。 \n 5.發布成本計算加載項。 \n 2013年 \n 1. View Orientation 有一個對話框，不再只是在工具欄上了。還引入了選擇器多維數據集 \n 2.以及保存視圖功能以便之後使用。 \n 3.以前的版本文件互操作性：2013文件現在可以在2012 SP5中打開。 \n 4.介紹 Conic 草圖實體。 \n 5.相交功能。 \n 6. Customer Portal （客戶門戶網站）上提供了 CAD Admin Dashboard （CAD管理員儀錶板）。 \n \n 2014年 \n 1.能夠通過上下工具欄快捷方式添加標準配合。 \n 2.替換草圖實體使用戶能夠用新的實體替換舊實體並仍然維護下游引用。 \n 3.推出了鈑金中的 Lofted Bend 功能。 \n 4.能夠創建 Conic Fillets （圓錐倒角）。 \n 5.樣式樣條草圖命令。 \n 6.自動縮放第一個草圖。現在，在草圖上創建第一個維度時，所有實體都會自行調整大小 \n 7.以進行縮放。 \n 8.能夠配置結構成員配置文件。現在允許配置輪廓草圖，這大大改變了需要組織的文件數量。 \n 9.MySolidWorks作為能夠提供自學培訓以及所有SolidWorks的在線資源社區發布。 \n 2015年 \n 1.動態參考可視化，幫助用戶了解父/子關聯。 \n 2.引入了選擇集，以便於重複使用幾何選擇組合。 \n 3.能夠直接從SolidWorks進行3D列印。 \n 4.Simulation中的疲勞分析。 \n 5.Profile center mate（輪廓中心配合）。 \n 6.發布 SolidWorks MBD 。 \n \n 2016年 \n 1.用戶介面重新設計，包括更好地支持高解析度顯示器。 \n 2.藍色/灰色盤默認採用傳統配色方案。 \n 3.引入了選擇麵包屑，使相關命令更易於訪問。 \n 4.實現 Mate Controller 工具，以更加可訪問的方式捕捉裝配定位。 \n 5.能夠全局替換失敗的配合實體。 \n 6.介紹 Thread 功能。 \n 7.發布 PDM Standard （標準版）並添加到SolidWorks Professional專業版軟體包中。 \n 8.SolidWorks Visualize作為獨立的圖片渲染應用程式發布。 \n 2017年 \n 1.引入3D互連以簡化不同文件類型與SolidWorks的協作。 \n 2.Asset Publisher具有 ground plane （地層）和 magnetic mates （磁配對），可輕鬆實現 \n 3.大型裝配布局。 \n 4.引入了 Advanced Hole （高級孔）功能。 \n 5.增強了Wrap功能，可在更多類型的面選擇上創建幾何體。 \n 6.陰影草圖輪廓增強選擇和操作功能。 \n 2018年 \n 1.SolidWorks啟動時的歡迎對話框。 \n 2.用戶設置現在可以登錄。新發布的在線許可也可以遵循此登錄，在需要在多台計算機上 \n 3.使用SolidWorks時為用戶提供另一種選擇。 \n 4.選擇幾何圖形，允許用戶忽略幾何圖形並在其上選擇其他實體。 \n 5.引入了標籤和插槽功能，自動執行以前在鈑金和焊件中常用的手動方法。 \n 6.能夠鏡像3D草圖中的實體。 \n 7.首次使用筆，觸屏和基於手勢的草圖繪製功能。 \n 8.引入拓撲仿真分析。 \n 2019年 \n 1.顯著改進裝配性能。 \n 2. Silhouette defeature 命令，簡化了從模型中刪除細節以提高性能或保護智慧財產權的過程。 \n 3.能夠按狀態對mates進行分組。 \n 4.部分倒角和圓角。 \n 5.將圖像轉換為網格/凹凸貼圖，從圖像文件創建實際的3D幾何體。 \n \n 直至現今，SolidWorks 自成立以來一直在不斷優化 3D CAD 操作。強大的新功能和新產品的發布，使SolidWorks真正用行動證明他們仍然保持著最初使命：使CAD軟體更易於使用，可以讓每個人都能夠輕鬆使用。', 'tags': '', 'url': 'solidworks.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端 . \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};