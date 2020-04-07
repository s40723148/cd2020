var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Four-wheeled robot', 'text': "Assignment 1: \n Due March 25, 2020 for class 2a . \n What do you need to know from\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0to implement a four-wheeled robot? \n Assignment 2: \n Due April 22, 2020 for class 2a. \n \n \n According to the material of Topic 0 and Topic 1, can you describe specifically what the mechanical design team need to do for accomplishing Assignment 1's four wheeled robot. \n \n \n What do you need to know from \xa0 https://cyberbotics.com/doc/guide/index \xa0 to implement a four-wheeled robot? \n \n \n Assignment 3: \n Due May 27, 2020 for class 2a. \n According to the reading of Topic 2 and Topic 3, propose a Mechatronic project by using CoppeliaSim or Webots and Onshape. \n \n", 'tags': '', 'url': 'Four-wheeled robot.html'}, {'title': 'CoppeliaSimt', 'text': 'CoppeliaSim   ( download ) \n 具有集成開發環境的機器人模擬器CoppeliaSim基於分佈式控制體系結構：可以通過嵌入式腳本，插件，ROS節點，BlueZero節點，遠程API客戶端或自定義解決方案分別控制每個對象/模型。這使CoppeliaSim非常通用，非常適合多機器人應用。控制器可以用C / C ++，Python，Java，Lua，Matlab，Octave或Urbi編寫。 \n Coppelia Robotics 在  CoppeliaSim version history \xa0中提到將不再更新 V-rep\xa0 ,並將精力集中在CoppeliaSim上。CoppeliaSim與V-REP 100％兼容。 它運行速度比V-REP快，並且具有更多功能 。 \n', 'tags': '', 'url': 'CoppeliaSimt.html'}, {'title': '場景&模型&環境', 'text': 'Scenes \n 場景和模型是CoppeliaSim的主要模擬元素。模型是場景的子元素。一個場景可以包含任何數量的模型 \n Models \n 模型是場景的子元素。除了文件（“ * .ttm”-文件類型）外，模型本身不能存在，也不能通過自身進行模擬。模型必須包含在場景中才能運行 。下圖為scenes & Models 之間的關係: \n \n Environment \n CoppeliaSim中的環境定義了屬於場景但不屬於場景物件的屬性和參數。保存模型時不保存環境屬性和參數，但只有保存場景則會 \n', 'tags': '', 'url': '場景&模型&環境.html'}, {'title': 'Calculation modules', 'text': 'Collision detection \n \n Distance calculation \n \n Inverse kinematics \n \n Dynamics \n CoppeliaSim的動力學模塊當前支持下列四種不同的物理引擎。用戶在任何時候都可以根據自己的仿真需求自由地從一種發動機快速切換到另一種發動機。物理引擎支持如此多樣化的原因是，物理模擬是一項複雜的任務，可以通過不同程度的精度，速度或支持多種功能來實現： \n \n \n \n \n Bullet physics library : \n 一個開源物理引擎，具有3D碰撞檢測，剛體動力學和 soft body dynamics （CoppeliaSim當前不支持該功能）。它用於遊戲和電影的視覺效果。它通常被視為遊戲物理引擎。 \n \n \n Open Dynamics Engine (ODE) : \n一個具有兩個主要組成部分的開源物理引擎：剛體動力學和碰撞檢測。它已在許多應用程序和遊戲中使用。它通常被視為遊戲物理引擎。 \n \n VortexÂ® Studio : \xa0 \n非開源商業物理學引擎，可產生高保真物理模擬。 Vortex提供了大量物理屬性的實際參數（即對應於物理單位），使該引擎既逼真又精確。 Vortex主要用於高性能/高精度工業和研究應用。 CoppeliaSim的Vortex插件基於Vortex Studio，該插件要求每個用戶向CM Labs註冊以獲取免費許可證密鑰。 \n \n Newton Dynamics : \xa0 \nNewton Dynamics是一個跨平台的逼真的物理模擬文庫。它實現了確定性求解器，它不是基於傳統的LCP或 疊代 方法，而是分別具有兩者的穩定性和速度。這項功能使Newton Dynamics不僅成為遊戲的工具，而且還成為任何實時物理模擬的工具。當前的插件執行是BETA版本。 \n \n \n \n \n', 'tags': '', 'url': 'Calculation modules.html'}, {'title': '編寫代碼', 'text': 'CoppeliaSim是高度可定制的模擬器：可以自定義模擬的每個方面。此外，模擬器本身可以進行定制，以使其性能完全符合要求。這可以通過精心設計的應用程序編程接口（API）來實現。支持六種不同的編程或編碼方法，每種方法都具有相對於其他方法的特殊優點&缺點，但所有六種方法都是相互兼容的（即可以同時使用，甚至可以穿插使用）。模型，場景或模擬器本身的控制實體可以位於以下位置： \n \n an\xa0 embedded script \xa0: \n an\xa0 add-on \xa0 or \xa0 the sandbox script \xa0: \n a\xa0 plugin \xa0: \n a\xa0 remote API \xa0: \n a\xa0 ROS node \xa0: \n a\xa0 BlueZero node \xa0: \n \n', 'tags': '', 'url': '編寫代碼.html'}, {'title': '模擬', 'text': '', 'tags': '', 'url': '模擬.html'}, {'title': 'Tutorials', 'text': 'Tutorials \n \n', 'tags': '', 'url': 'Tutorials.html'}, {'title': 'DigitalProduct Collaboration翻譯', 'text': "Finding and Using the Right Design Collaboration Tools \n 尋找和使用正確的設計協同工具 \n The right tools go a long way in reinforcing your team's design collaboration mindset. In this section, you'll learn what to look for in collaboration tools. We also recommend tools based on our own experiences. \n 正確的工具在增強團隊的設計協同思維方面大有幫助。在這 部分，您將了解在協同工具中尋找什麼。我們還根據我們自己的經驗推薦工具 。 \n SELECTING THE RIGHT TOOLS \n 選擇對的工具 \n Effective collaboration tools remove all barriers for collaborators to quickly and easily access and interact with the work. This keeps the focus on giving feedback. They also allow others to collaborate on a design without destroying the original. \n 有效的協同工具為協同者消除了所有障礙，使他們能夠快速輕鬆地存取及工作互動。這是將重點放在提供反饋上。他們還允許其他人 在不破壞原始設計的情況下進行協同。 \n In the past, we used relied on tools that provided basic versioning control instead of true collaborative features. For example, a designer would save a Sketch file and upload it to Dropbox. Another team member would then download it, work on it, and re-upload it. There was no easy way to make changes while the file was in another's hands. We tried something similar with Github, a tool that proved great for managing codebases, but not so much with iterative design work. Needless to say, these version control processes made our collaboration more time consuming, confusing, and very un-collaborative. \n 過去，我們使用依賴於提供基本版本控制的工具，而不是真正的 協同功能。例如，設計人員保存一個Sketch文件並將其上傳到Dropbox。 然後，另一個團隊成員將它下載，進行處理，然後重新上傳。沒有簡單的方法 在文件移交給他人的情況下進行更改。我們嘗試了與Github類似的方法， 實踐證明，該工具非常適合管理代碼庫，但在疊代設計工作中卻不那麼重要。 更不用說，這些版本控制流程使我們的協作更加耗時，令人困惑，而且非常不協同。 \n Now we choose from a variety of more advanced tools depending on the type of collaboration we want to achieve. \n 現在，我們想要實現根據協同類型從多種更高級的工具中進行選擇 。 \n FIGMA \n This is a collaboration-first, shared workspace tool. Figma works well for having multiple people in same area of the design file. You can watch teammates design or work together on the same design in real time. \n 這是一個協同優先的共享工作區工具。 Figma非常適合在其中有多個人 設計文件的相同區域。您可以觀看隊友設計或在同一設計上一起即時工作。 \n Benefits: \n Figma reduces the ability for someone to work in a silo. \n There's no need to add unnecessary polish or create static deliverables to enable collaboration. So you don't need to change your workflow to show off a design. \n It's easy to see and interact with the work in its native environment and apply tweaks at will. \n When to use: Flow docs, high-fidelity wireframes, spur-of-the-moment collaboration, and walking customers through a series of screens to explain and get feedback on design direction. \n 好處 : \n Figma降低了某人在孤立單位工作的能力。 \n 無需添加不必要的修飾或創建可交付結果的靜態即可實現協同。因此，您無需更改工作流程即可展示設計。 \n 可以很容易地在其原生環境中看到並與之互動，並隨意進行調整。 \n 何時使用：流動文檔，高保真線框，即時協同和 通過客戶一系列畫面來解釋並獲得有關設計方向的反饋。 \n", 'tags': '', 'url': 'DigitalProduct Collaboration翻譯.html'}, {'title': '每周進度', 'text': 'W2 \n CoppeliaSim User Manual \xa0內容分析 \n 了解製作四輪機器人所需功能 \n W3 \n 了解製作四輪機器人所需功能( CoppeliaSim User Manual ) \n 著手進行機器人製作 \n PDF製作( CoppeliaSim User Manual ) \n W4 & W5 \n PDF製作( CoppeliaSim User Manual ) \n Webots  內容分析 \n DesignCollaborationBetterProducts 內容翻譯', 'tags': '', 'url': '每周進度.html'}]};