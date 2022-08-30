package com.Lenguaje3;

public class metodo {
    
    
    //atributos
    private static int numero1;
    private static int numero2;
    private int menor=2;


    public metodo() {

    }
    public metodo(int numero1, int numero2){
        this.numero1=numero1;
        this.numero2=numero2;
    }
    
    public int mayor(int num){
        if(num>numero1)
        numero1=num;
        return numero1;
    }
    public int menor(int num2){
        if(num2<this.menor)
        this.menor=num2;
        return this.menor;
    
    }
        

    public int getNumero1() {
        return numero1;
    }

    public void setNumero1(int numero1) {
        this.numero1 = numero1;
    }
    public int obtenermenor() {
        int num1;
        num1=this.menor;
        return num1;
    }
}
