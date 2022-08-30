package com. Lenguaje3;

import java.util.Scanner;

/*Ejercicio#2 En la clase de Lenguaje de Programación es necesario determinar la calificación más alta, 
la más baja, y el promedio. Codifique un programa utilizando, clases y excepciones, que capture una serie
de calificaciones de varios estudiantes, la condición de salida es cuando ingresa 0. La clase debe contener
 cuatro métodos que permitan determinar la calificación más alta, la más baja, y el promedio y validar que
  la nota ingresada este entre 0 y 100.*/

  public class notas{

    public static void main(String[] args) {

      try {
        double suma, resta, multiplicacion,division;
        double num1,num2;
        int opc;
        Scanner entrada = new Scanner(System.in);
        metodo lector = new metodo();
       
        int not;
        do {
        System.out.println("Ingrese una calificacion");
          not = entrada.nextInt();
          if(not>0){
          lector.menor(not);
          lector.mayor(not);
        }else{
          System.out.println("Programa finalizado");
        }
        } while (not!=0);
        System.out.println("La calificacion mas alta es:" + lector.getNumero1());
        System.out.println("La calificacion mas baja es:" + lector.obtenermenor());
      } catch (Exception e) {
        System.out.println("Ocurrio un Error");
      }
      
    }
  }