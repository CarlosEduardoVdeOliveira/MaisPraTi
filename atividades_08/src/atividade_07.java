import java.util.Scanner;

public class atividade_07 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite uma frase: ");
        String sentence = scanner.nextLine();

        String[] words = sentence.trim().split("\\s+");
        int counterWord = words.length;

        System.out.println("Numeros de palavras na sentença é de: "+counterWord);
    }
}
