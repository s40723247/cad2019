var tipuesearch = {"pages": [{'title': 'WEEK', 'text': '\n week2-5 \n Week6-9 \n week10-14 \n week15-18 \n \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'week2-5', 'text': 'week2 \n \n 在自己的git hub建立新倉儲 cad2019 ，並且到mde.tw下載2019Fall可攜套件.7z \n 使用git config --global user.name "user name"與git config --global user.email " user email " 設定自己的名字與email \n 使用git submodule add新的指令 指令如下 ( git submodule add https://github.com/mdecourse/cmsimde.git cmsimde ) \n 輸入指令python -m pip install flask cors \n 開啟近端開始更新內容，更新完成使用一上所使用的 git指令(git status、git pull ..... ) \n \n \n week3 \n 1.\xa0 Y:\\portablegit\\bin\\sh.exe 重新命名為 sh_rename_for_solvespace.exe \n 2. 輸入 指令git clone\xa0 --recurse-submodules \n 3. 在cmakelist內之713及714行(加入#字號) \n 4. 進到 cd solvespace>cd extlib>cd libpng>mkdir build>cd build \n 5. 執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 6. 找 \xa0libpng.dll.a 更名，並更名名為 libpng_static.a \n 7. 回到 solvespace ,建立 build 後進入 build\xa0 \n 8.\xa0執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n week4 \n 補做之前未跟上的進度 \n week5 \n solvespace的基本操作練習 \n 1.先將 solvespace打開 \n 2.繪製一個35x35的方形 (快捷鍵D可以定義尺寸) \n 3.點選New group extruding active sketch (快捷鍵Shift+X) \n 4.旁邊小視窗會出現一個in 3D的字樣 \n 5.點選草圖然後按下滑鼠中鍵可以旋轉 \n 6.成功進入3D之後旁邊小視窗找到color，再旁邊會有一個change那就是可以改顏色的部分 \n 7.在color下有個opacity可以更改方塊的透明度 \n 8.基本的練習 (測量點到點的距離、隱藏座標、隱藏point的部分) \n \n 完成圖 \n \n 以下是練習影片 \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'Week6-9', 'text': 'week6 \n 1.到課程網站中解壓縮web_vrep2與V-REP3 \n 2.打開V-REP3內的應用程式 \n 3.導入web_vrep2的two_wheeler.ttt檔案 \n 4.打開web_vrep2內的app.py按下GO \n 5.複製網址打開網頁 \n 6.操作車子 \n 教學影片 \n \n week7 \n 1.到E:\\tmp\\solvespace\\build\\src\\CMakeFiles\\solvespace.dir內刪除obj檔案 \n 2.E:\\tmp\\solvespace\\src尋找slovespace.cpp檔案進行編輯 \n 3.搜尋GPL 並把上面改成 compiled by 自己的學號 \n 4.再進入E:\\tmp\\solvespace\\build，輸入指令cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 5.輸入另一個指令mingw32-make \n 6.到E:\\tmp\\solvespace\\build\\bin裡面打開slevespace.exe \n 7.點選Help內的About確認是否編譯完成 \n \n', 'tags': '', 'url': 'Week6-9.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端 . \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};