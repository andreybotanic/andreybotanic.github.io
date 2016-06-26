$(document).ready(function(){
    $(".profiles").click(function(){
        $(".profiles").removeClass("tabpanel__link_active");
        $(this).addClass("tabpanel__link_active");
        $(".tab").filter(function(){
            return this.id.match("profilesTab*");
        }).removeClass("tab_active");
        $($(this).attr("href")).addClass("tab_active");
    });
    
    $(".study").click(function(){
        $(".study").removeClass("tabpanel__link_active");
        $(this).addClass("tabpanel__link_active");
        $(".tab").filter(function(){
            return this.id.match("studyTab*");
        }).removeClass("tab_active");
        $($(this).attr("href")).addClass("tab_active");
    });
    
     $(".subjects").click(function(){
        $(".subjects").removeClass("tabpanel__link_active");
        $(this).addClass("tabpanel__link_active");
        $(".tab").filter(function(){
            return this.id.match("subjectsTab*");
        }).removeClass("tab_active");
        $($(this).attr("href")).addClass("tab_active");
    });
});