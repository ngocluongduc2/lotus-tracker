object Main {
  def main(args: Array[String]): Unit = {
    val xs = List(2,4,6,8,10)
    println(s"avg=${xs.sum.toDouble/xs.size}")
  }
}
