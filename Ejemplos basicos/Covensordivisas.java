import java.util.Scanner;

public class Covensordivisas {
    public static void main(String[] args) {
         double cantidad;
         double valorL = 0.041;
         double valorD = 24.61;
         double valorLE = 0.035;
         double valorE = 28.18;
        
         int num=0,opc,opc2;
         double rescant;
         Scanner entrada = new Scanner(System.in);
         
         do{
         System.out.println("\tPrograma que convierte Divisas");
         System.out.println("1.Convertir lempira a dolares\t2.convertir lempiras a euros\t3.salir");
         opc= entrada.nextInt();
         if(opc==1){
             System.out.println("Ingrese la cantidad a convertir");
             cantidad= entrada.nextDouble();
             System.out.println("1.Covertir lempiras a dolares\t2.convertir dolares a lempiras");
             opc2= entrada.nextInt();
             if(opc2==1){
                 rescant= cantidad*valorL;
                 System.out.println("Su cantidad en dolares es: "+rescant);
             }
             if(opc2==2){
                rescant= cantidad*valorD;
                System.out.println("Su cantidad en Lempiras es: "+rescant);
             }
         }else if (opc==2){
            System.out.println("Ingrese la cantidad a convertir");
            cantidad= entrada.nextDouble();
            System.out.println("1.Covertir lempiras a euross\t2.convertir euros a lempiras");
            opc2= entrada.nextInt();
            if(opc2==1){
                rescant= cantidad*valorLE;
                System.out.println("Su cantidad en euros es: "+rescant);
            }
            if(opc2==2){
               rescant= cantidad*valorE;
               System.out.println("Su cantidad en Lempiras es: "+rescant);
         }
        }
         num++;
        }while(num!=4);
       
    }
} 

