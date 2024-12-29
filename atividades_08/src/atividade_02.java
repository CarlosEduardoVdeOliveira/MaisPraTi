import java.util.Scanner;

public class atividade_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite uma palavra: ");
        String word = scanner.nextLine();
        String backWord = "";
        word = word.toLowerCase();

        for (int i = (word.length() -1); i >= 0; i--) {
            backWord += (word.charAt(i));
        }
        if (backWord.equals(word)){
            System.out.println("Palavra palidroma.");
        }else{
            System.out.println("Palavra não palidroma.");
        }
    }
}
