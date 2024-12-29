import java.util.Arrays;
import java.util.Scanner;

public class atividade_05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite uma palavra: ");
        String firstWord = scanner.nextLine();
        System.out.print("Digite outra palavra: ");
        String secondWord = scanner.nextLine();

        if (firstWord.length() != secondWord.length()) {
            System.out.println("A palavra "+secondWord+ " não é anagrama da palavra "+ firstWord);
            scanner.close();
        }
        char[] arrayFirstWord = firstWord.toCharArray();
        char[] arraySecondWord = secondWord.toCharArray();

        Arrays.sort(arrayFirstWord);
        Arrays.sort(arraySecondWord);

        if (Arrays.equals(arrayFirstWord, arraySecondWord)){
            System.out.println("A palavra "+secondWord+ " é anagrama da palavra "+ firstWord);
        }else{
            System.out.println("A palavra "+secondWord+ " não é anagrama da palavra "+ firstWord);
        }
    }
}
