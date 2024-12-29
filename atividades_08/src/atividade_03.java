import java.util.Scanner;

public class atividade_03 {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a quantidade de numeros da sequência de fibonacci: ");
        int numberFib = scanner.nextInt();

        //0 + 1 = 1 + 1 = 2 + 1 = 3 + 2 = 5 + 3 = 8 + 5 = 13
        int soma = 0;
        int somaAux = 1;
        if (numberFib <= 0) {
            throw new Exception("Não existe posição menor que zero na sequencia de fibonacci.");
        }
        System.out.println("Sequência de Fibonacci.");
        for (int i = 0; i < numberFib; i++) {
            System.out.print(soma+ " ");
            int sequencia = soma + somaAux;
            soma = somaAux;
            somaAux = sequencia;
        }

        scanner.close();
    }
}
