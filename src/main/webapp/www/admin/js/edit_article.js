var Article={
    AdvancedMode:function(obj){
        if($(obj).text()=="高级"){
            $("#div_summary").show();
            //$("#div_password").show();
            //$("#div_private").show();
            //$("#div_discuss").show();
            //$("#div_post_type").show();
            $(obj).text("精简");
        }else{
            $("#div_summary").hide();
            //$("#div_password").hide();
            //$("#div_private").hide();
            //$("#div_discuss").hide();
            //$("#div_post_type").hide();
            $(obj).text("高级");
        }
    }
};