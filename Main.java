public class Main {
  static long fact(int n){ return n<2?1:n*fact(n-1); }
  public static void main(String[] args){
    System.out.println("fact(10)="+fact(10));
  }
}
