    //leyendo prpiedades para el despliege de sidebar
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");
    let input = document.querySelector("#input");
    //leyendo propiedades de la seccion dashboard
    let dashboard = document.querySelector(".dashboard");
    let text1 = document.querySelector(".text1");
    let sectionDasboard = document.querySelector(".home-section-container1");
    //leyendo propiedades de la seccion user
    let user = document.querySelector(".user");
    let text2 = document.querySelector(".text2");
    let sectionUser = document.querySelector(".home-section-container2");
    //leyendo propiedades de la seccion messages
    let messages = document.querySelector(".messages");
    let text3 = document.querySelector(".text3");
    let sectionMessages = document.querySelector(".home-section-container3");
    //leyendo propiedades de la seccion analytics
    let analytics = document.querySelector(".analytics");
    let text4 = document.querySelector(".text4");
    let sectionAnalytics = document.querySelector(".home-section-container4");
    //leyendo propiedades de la seccion files
    let files = document.querySelector(".files");
    let text5 = document.querySelector(".text5");
    let sectionFiles = document.querySelector(".home-section-container5");
    //leyendo propiedades de la seccion order
    let order = document.querySelector(".order");
    let text6 = document.querySelector(".text6");
    let sectionOrder = document.querySelector(".home-section-container6");
    //leyendo propiedades de la seccion saved
    let saved = document.querySelector(".saved");
    let text7 = document.querySelector(".text7");
    let sectionSaved = document.querySelector(".home-section-container7");
    //leyendo propiedades de la seccion setting
    let setting = document.querySelector(".setting");
    let text8 = document.querySelector(".text8");
    let sectionSetting = document.querySelector(".home-section-container8");
    //leyendo propiedades de home-section
    let homeSection = document.querySelector(".home-section");

    // reemplazando el icono del menú cuando se abre y cuando se cierra sidebar
    function menuBtnChange(){
      if (sidebar.classList.contains("open")) {
        setTimeout(5000);
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//reemplazando la clase en los iconos
      } else {
        setTimeout(5000);
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//reemplazando la clase en los iconos
      }
    }

    //desplegando sidebar con clic en boton menu
    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });  
    

    //desplegando sidebar con clic en boton  buscar
    searchBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });


    //cerrando sidebar al hacer click sobre home-section    
    homeSection.addEventListener('mouseover', () =>{
      if (sidebar.classList.contains("open")) {
        sidebar.classList.toggle("open");
        menuBtnChange(); 
        setInterval(5000);
        input.value = "" 
      }
    });
    
    dashboard.addEventListener('click', ()=>{
        text1.style.display = "inline-block";
        sectionDasboard.style.display = "block";
        text2.style.display = "none";
        sectionUser.style.display = "none";
        text3.style.display = "none";
        sectionMessages.style.display = "none";
        text4.style.display = "none";
        sectionAnalytics.style.display = "none";
        text5.style.display = "none";
        sectionFiles.style.display = "none";
        text6.style.display = "none";
        sectionOrder.style.display = "none";
        text7.style.display = "none";
        sectionSaved.style.display = "none";
        text8.style.display = "none";
        sectionSetting.style.display = "none";
    });

    user.addEventListener('click', ()=>{
        text1.style.display = "none";
        sectionDasboard.style.display = "none";
        text2.style.display = "inline-block";
        sectionUser.style.display = "block";
        text3.style.display = "none";
        sectionMessages.style.display = "none";
        text4.style.display = "none";
        sectionAnalytics.style.display = "none";
        text5.style.display = "none";
        sectionFiles.style.display = "none";
        text6.style.display = "none";
        sectionOrder.style.display = "none";
        text7.style.display = "none";
        sectionSaved.style.display = "none";
        text8.style.display = "none";
        sectionSetting.style.display = "none";
    });
    messages.addEventListener('click', ()=>{
        text1.style.display = "none";
        sectionDasboard.style.display = "none";
        text2.style.display = "none";
        sectionUser.style.display = "none";
        text3.style.display = "inline-block";
        sectionMessages.style.display = "block";
        text4.style.display = "none";
        sectionAnalytics.style.display = "none";
        text5.style.display = "none";
        sectionFiles.style.display = "none";
        text6.style.display = "none";
        sectionOrder.style.display = "none";
        text7.style.display = "none";
        sectionSaved.style.display = "none";
        text8.style.display = "none";
        sectionSetting.style.display = "none";
    });
    analytics.addEventListener('click', ()=>{
        text1.style.display = "none";
        sectionDasboard.style.display = "none";
        text2.style.display = "none";
        sectionUser.style.display = "none";
        text3.style.display = "none";
        sectionMessages.style.display = "none";
        text4.style.display = "inline-block";
        sectionAnalytics.style.display = "block";
        text5.style.display = "none";
        sectionFiles.style.display = "none";
        text6.style.display = "none";
        sectionOrder.style.display = "none";
        text7.style.display = "none";
        sectionSaved.style.display = "none";
        text8.style.display = "none";
        sectionSetting.style.display = "none";
    });
    files.addEventListener('click', ()=>{
        text1.style.display = "none";
        sectionDasboard.style.display = "none";
        text2.style.display = "none";
        sectionUser.style.display = "none";
        text3.style.display = "none";
        sectionMessages.style.display = "none";
        text4.style.display = "none";
        sectionAnalytics.style.display = "none";
        text5.style.display = "inline-block";
        sectionFiles.style.display = "block";
        text6.style.display = "none";
        sectionOrder.style.display = "none";
        text7.style.display = "none";
        sectionSaved.style.display = "none";
        text8.style.display = "none";
        sectionSetting.style.display = "none";
    });
    order.addEventListener('click', ()=>{
        text1.style.display = "none";
        sectionDasboard.style.display = "none";
        text2.style.display = "none";
        sectionUser.style.display = "none";
        text3.style.display = "none";
        sectionMessages.style.display = "none";
        text4.style.display = "none";
        sectionAnalytics.style.display = "none";
        text5.style.display = "none";
        sectionFiles.style.display = "none";
        text6.style.display = "inline-block";
        sectionOrder.style.display = "block";
        text7.style.display = "none";
        sectionSaved.style.display = "none";
        text8.style.display = "none";
        sectionSetting.style.display = "none";
    });
    saved.addEventListener('click', ()=>{
        text1.style.display = "none";
        sectionDasboard.style.display = "none";
        text2.style.display = "none";
        sectionUser.style.display = "none";
        text3.style.display = "none";
        sectionMessages.style.display = "none";
        text4.style.display = "none";
        sectionAnalytics.style.display = "none";
        text5.style.display = "none";
        sectionFiles.style.display = "none";
        text6.style.display = "none";
        sectionOrder.style.display = "none";
        text7.style.display = "inline-block";
        sectionSaved.style.display = "block";
        text8.style.display = "none";
        sectionSetting.style.display = "none";
    });
    setting.addEventListener('click', ()=>{
        text1.style.display = "none";
        sectionDasboard.style.display = "none";
        text2.style.display = "none";
        sectionUser.style.display = "none";
        text3.style.display = "none";
        sectionMessages.style.display = "none";
        text4.style.display = "none";
        sectionAnalytics.style.display = "none";
        text5.style.display = "none";
        sectionFiles.style.display = "none";
        text6.style.display = "none";
        sectionOrder.style.display = "none";
        text7.style.display = "none";
        sectionSaved.style.display = "none";
        text8.style.display = "inline-block";
        sectionSetting.style.display = "block";
    });

