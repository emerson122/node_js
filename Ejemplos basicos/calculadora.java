import java.util.Scanner;

import javax.sound.sampled.SourceDataLine;
import javax.swing.plaf.synth.SynthIcon;
import javax.swing.plaf.synth.SynthOptionPaneUI;

/*hacer un programa que le permita sumar,restar,multiplicar y dividir */

public class calculadora {
    
    public static void main(String[] args) {
        double suma, resta, multiplicacion,division;
        double num1,num2;
        int opc;
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese un numero");
        num1= entrada.nextDouble();
        System.out.println("ingrese un segundo numero");
        num2= entrada.nextDouble();
        System.out.println("ingrese el numero de la operacion a realizar");
        System.out.println("1.Sumar\t2.Restar\t3.Dividir\t4.Multiplicar");
        opc = entrada.nextInt();
        if (opc==1){
            suma = num1+num2;
            System.out.println("Al sumar "+num1+" + "+num2+" es "+suma );
        }
        else if(opc==2){
            resta = num1-num2;
            System.out.println("Al restar "+num1+" + "+num2+" es "+resta);
        }
        else if(opc==3){
            division= num1/num2;
            System.out.println("Al dividir "+num1+" + "+num2+" es "+division);
        }
        else if(opc==4){
            multiplicacion = num1*num2;
            System.out.println("Al multiplicar "+num1+" + "+num2+" es "+multiplicacion);
        }

    }
}
