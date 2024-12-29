import java.util.Scanner;

public class atividade_06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digiete o numero: ");
        int number = scanner.nextInt();

        int numberSort = (int) (Math.random() * 50) + 1;

        while (number != numberSort){
            System.out.println("Você errou tente novamente...");
            System.out.print("Digiete o numero: ");
            number = scanner.nextInt();
        }
        if (number == numberSort) {
            System.out.println("Parabéns! Você acertou!");
        }
    }
}
