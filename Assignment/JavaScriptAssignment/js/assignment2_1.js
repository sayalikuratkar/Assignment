function table(){
    for (var index=1; index<=100; index++)
    {   
        document.write(index+" ");
       if(index%10==0)
            document.write("<br>");
    }

    document.write("<br>Index value After completion of loop is "+index);
}