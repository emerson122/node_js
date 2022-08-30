import java.util.Scanner;

import javax.sound.sampled.SourceDataLine;

public class saldo{

    public static void main(String[] args) {
        double horastrab, sldhora;
        double sueldoEmp=0,sueldotol=0;
        int k=0;
        Scanner entrada = new Scanner(System.in);

        System.out.println("Programa que calcula el sueldo de 3 empleados");
        System.out.println("+++++++++++++++++++++++++++++++++++++++++++++");

        while (k<3){
            System.out.println("ingrese las Horas trabajadas");
            horastrab = entrada.nextDouble();
            System.out.println("ingrese el sueldo por hora");
            sldhora = entrada.nextDouble();

            sueldoEmp =horastrab*sldhora;
            if (validahoras(horastrab)){
            System.out.println("El sueldo del empleado es: "+ sueldoEmp);
            sueldotol=+sueldoEmp;
            sueldotol = sueldotol + sueldoEmp;
            k++;
        } else{
            System.out.println("El valor ingresado no es valido");
        }
        }//fin del ciclo while
        System.out.println("El sueldo total es "+sueldotol);
    }
    private static boolean validahoras (double hphoras){
        if ((hphoras>0)&&(hphoras<=55)){
            return true;
        }
        else {
            return false;
        }

        
    }
}