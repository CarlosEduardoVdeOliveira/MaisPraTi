import java.util.Scanner;

public class atividade_01 {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        Double number1 = scanner.nextDouble();
        System.out.print("Digite outro número: ");
        Double number2 = scanner.nextDouble();
        System.out.print("Digite uma operação (+,-,*,/): ");
        String operator = scanner.next();
        Double result;
        switch (operator){
            case "+":
                result = number1 + number2;
                System.out.println("O resultado de " + number1 +" + " + number2 + " = " + result);
                break;
            case "-":
                result = number1 - number2;
                System.out.println("O resultado de " + number1 +" - " + number2 + " = " + result);
                break;
            case "*":
                result = number1 * number2;
                System.out.println("O resultado de " + number1 +" * " + number2 + " = " + result);
                break;
            case "/":
                if (number2 == 0) throw new Exception("Não a divisão por zero.");
                result = number1 / number2;
                System.out.println("O resultado de " + number1 +" / " + number2 + " = " + result);
                break;
            default:
                System.out.println("Operação inválida.");
                break;
        }
        scanner.close();
    }
}
