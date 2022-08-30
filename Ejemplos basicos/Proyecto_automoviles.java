

import java.util.Scanner;


public class Proyecto_automoviles {
    static Scanner leer = new Scanner(System.in);
//Variables globales
static int precio=0, cantidad=0, sector=0, marca=0,modelo=0, pedido=0, factura=0,mayor=0;
static int contaT=0,contaN=0,contaM=0,contaH=0;
static float imp=0, subTotal=0, total=0, totalImp=0, acumTotal=0, acumImp=0;
static String marcaAut=" ", modeloAut=" ",vehimas="";

    public static void main(String[] args) {
     procesoGeneral();
     
    }
    private static void procesoGeneral(){
     do{   
        System.out.println("**VENTA DE VEHICULOS**");
        System.out.println("**Ingrese el sector**\n1.Sector publico \n2.Sector privado");
        sector = leer.nextInt();
        ValidacionEntradas(sector, 1,2 );
        
        if(sector==1){
            imp =0.07f;
        }else{
            imp = 0.15f;
        }
        System.out.println("**Marcas disponibles**");
        System.out.println("1.*TOYOTA* \n2.*NISSAN--(L.36,000.00)* \n3.*MAZDA--(L.29,000.00)* \n4.*HYUNDAI*");
        System.out.println("Selecione la marca que desea");
        marca = leer.nextInt(); 
        ValidacionEntradas(marca, 1,4 );
        
        switch (marca){
            case 1:
                modelosToyota();
                marcaAut="TOYOTA";
                break;
            case 2:
                modelosNissan();
                marcaAut="NISSAN";
                break;
                
            case 3:
                  modelosMazda();
                  marcaAut="MAZDA";
                  break;
            case 4:
                modelosHyundai();
                marcaAut="HYUNDAI";
            default:
                break;
        }
        masvendido(marcaAut);
         System.out.println("INGRESE LA CANTIDAD DE VEHICULOS QUE DESEA");
         pedido = leer.nextInt();
         cantVehiculos();
         
         impresionFactura();
         
         System.out.println("DESEA OTRA FACTURA");
         System.out.println("1.SI \n2.NO");
         factura = leer.nextInt();
    }while(factura==1);
        
        
        
        
     
    }
 
    private static void masvendido(String vehiculo){
       
        String carro1="TOYOTA";
        String carro2="NISSAN";
        String carro3="MAZDA";
        String carro4="HYUNDAI";
        if (vehiculo== carro1){
            contaT+=1;
            
        }else if(vehiculo== carro2){
            contaN+=1;
            
        }else if(vehiculo== carro3){
            contaM+=1;
            
        }else if(vehiculo== carro4){
            contaH+=1;
            
        }

        if(contaT>contaN && contaT>contaM && contaT>contaH) 
        {
            mayor=contaT;
            vehimas=carro1;
        }else if (contaN>contaT && contaN>contaM && contaN>contaH){
            mayor=contaN;
            vehimas=carro2;
        }else if (contaM>contaT && contaM>contaN && contaM>contaH){
            mayor=contaM;
            vehimas=carro3;
        }else if (contaH>contaT && contaH>contaM && contaH>contaN){
            mayor=contaH;
            vehimas=carro4;
        }
       
    }
  private static void ValidacionEntradas(int parametro, int limInicial, int limFinal){
      do{
          if(parametro<limInicial || parametro>limFinal){
              System.out.println("**ERROR!! NO DISPONIBLE**");
              System.out.println("VUELVA A INGRESAR LOS DATOS CORRECTAMENTE");
              parametro=leer.nextInt();
          }
          }while(parametro<limInicial || parametro>limFinal);
      }
  
  private static void modelosToyota(){
             System.out.println("Modelos disponibles**");
             System.out.println("1.*HYLUX--(L.40,000.00)* \n2.*COROLLA--(L.22,000.00)*");
             System.out.println("seleccione un modelo**");
             modelo = leer.nextInt();
             
             if (modelo==1){
                 precio=40000;
                 cantidad=10;
                 modeloAut="HILUX";
             }else{
                 precio = 22000;
                 cantidad=7;
                 modeloAut="COROLLA";
             }
             ValidacionEntradas(modelo, 1, 2);
    }
  
  private static void modelosNissan(){
      System.out.println("Modelos disponibles**");
      System.out.println("Frontier  --L.36000.00**");
     precio=36000;
     cantidad=8;
      
  }
  
  private static void modelosMazda(){
      System.out.println("Modelos disponibles**");
      System.out.println("Wagon  --L.29000.00**");
     precio=29000;
     cantidad=6;
  }
    private static void modelosHyundai(){
             System.out.println("Modelos disponibles**");
             System.out.println("1.*Tucson--(L.32,000.00)* \n2.*Santa Fe--(L.38,000.00)*");
             System.out.println("seleccione un modelo**");
             modelo = leer.nextInt();
             
             if (modelo==1){
                 precio=32000;
                 cantidad=10; 
                 modeloAut="TUCSON";
             }else{
                 precio=38000;
                 cantidad=8;
                 modeloAut="SANTA FE";
             }
             ValidacionEntradas(modelo, 1, 2);
    }
    
    private static void cantVehiculos(){
    
         if (pedido>cantidad){
             System.out.println("La Existencia es de "+cantidad);
             System.out.println("VUELVA A INGRESAR LA CANTIDAD DE VEHICULOS QUE DESEA");
             pedido = leer.nextInt();                 
         }
    
    }
    
    private static void impresionFactura(){
     subTotal=precio*pedido;
     totalImp=subTotal*imp;
     total=subTotal+totalImp;
     
     
     //impresion de factura
         System.out.println("MARCA DE VEHICULO                  :"+marcaAut);
         System.out.println("MODELO DE VEHICULO                 :"+modeloAut);
         System.out.println("CANTIDAD DE VEHICULOS COMPRADOS    :"+pedido);
         System.out.println("EL SUB TOTAL ES DE                 :"+subTotal);
         System.out.println("EL IMPUESTO SOBRE VENTA ES DE      :"+totalImp);
         System.out.println("EL  TOTAL ES DE                    :"+total);
         System.out.println("La marca de Vehiculo mas vendido es:"+vehimas);
    }
      
      
  }