fun fib(n:Int):Long = if (n<2) n.toLong() else fib(n-1)+fib(n-2)
fun main(){
  println("fib(20)="+fib(20))
}
