function aula11()
{
    var jogo = [
        ["cachorro.jpg","cobra.jpg"],
        ["galinha.jpg","gato.jpg"],
        ["rato.jpg","cachorro.jpg"],
        ["cobra.jpg","galinha.jpg"],
        ["gato.jpg","rato.jpg"]
    ]
    document.write("<table border align='center'>");

    document.write("<tr>","<th> 1 <img src='img/"+jogo[0][0]+"'>","<th/>");
    document.write("<th> 2 <img src='img/"+jogo[0][1]+"'>","<br/>","<th/>","<tr/>");

    document.write("<tr>","<th> 3 <img src='img/"+jogo[1][0]+"'>","<th/>");
    document.write("<th> 4 <img src='img/"+jogo[1][1]+"'>","<br/>","<th/>","<tr/>");

    document.write("<tr>","<th> 5 <img src='img/"+jogo[2][0]+"'>","<th/>");
    document.write("<th> 6 <img src='img/"+jogo[2][1]+"'>","<br/>","<th/>","<tr/>");

    document.write("<tr>","<th> 7 <img src='img/"+jogo[3][0]+"'>","<th/>");
    document.write("<th> 8 <img src='img/"+jogo[3][1]+"'>","<br/>","<th/>","<tr/>");

    document.write("<tr>","<th> 9 <img src='img/"+jogo[4][0]+"'>","<th/>");
    document.write("<th> 10 <img src='img/"+jogo[4][1]+"'>","<th/>","<tr/>");

    document.write("<table/>");
}

function aula111()
{
    var j1 = document.getElementById("cx1").value;
    var j2 = document.getElementById("cx2").value;

    var  jogar = [
        ["1","2"],
        ["3","4"],
        ["5","6"],
        ["7","8"],
        ["9","10"]
    ]

    if(j1 == jogar[0][0] && j2 == jogar[2][1] || j1 == jogar[2][1] && j2 == jogar[0][0])
    {
        document.write("Parabéns vc encontrou um par!");
    }
        else if(j1 == jogar[0][1] && j2 == jogar[3][0] || j1 == jogar[3][0] && j2 == jogar[0][1])
        {
            document.write("Parabéns vc encontrou um par!!");
        }
            else if(j1 == jogar[1][0] && j2 == jogar[3][1] || j1 == jogar[3][1] && j2 == jogar[1][0])
            {
                document.write("Parabéns vc encontrou um par!!");
            } 
                else if(j1 == jogar[1][1] && j2 == jogar[4][0] || j1 == jogar[4][0] && j2 == jogar[1][1])
                {
                    document.write("Parabéns vc encontrou um par!!");
                }  
                    else if(j1 == jogar[2][0] && j2 == jogar[4][1] || j1 == jogar[4][1] && j2 == jogar[2][0])
                    {
                        document.write("Parabéns vc encontrou um par!!");
                    }
                    else
                    {
                        document.write("Infelizmente vc errou!");
                    }
}