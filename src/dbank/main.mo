import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {

  stable var currentValue: Float = 500;
  //currentValue := 500;
  stable var startTime = Time.now();  

  public func incrementValue(amount: Float){
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func decrementValue(amount: Float){
    let tempValue: Float = currentValue - amount;
    if(tempValue >= 0 ){
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Amount to withdraw is greater than the current balance!");
      Debug.print(debug_show (tempValue));
    }
  };

  public query func checkCurrentValueWallet(): async Float{
    return currentValue;
  };

  public func calculateFees(){
    let currentTime = Time.now();
    let differenceByNanoSeconds = currentTime - startTime;
    let differenceBySeconds = differenceByNanoSeconds / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(differenceBySeconds));
    startTime := currentTime;
  }

}