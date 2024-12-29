import java.util.Scanner;

public class atividade_04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o numero para ser invertido: ");
        Integer number = scanner.nextInt();
        String invertedNumber = "";
        String numberStr = String.valueOf(number);
        for (int i = numberStr.length() - 1; i >= 0; i--){
            invertedNumber += numberStr.charAt(i);
        }
        System.out.println("Numero "+number+ " invertido: "+invertedNumber);
    }
}
