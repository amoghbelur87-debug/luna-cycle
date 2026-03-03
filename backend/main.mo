import Text "mo:base/Text";
import Array "mo:base/Array";

actor FemCare {
  // Simple health check
  public query func ping() : async Text {
    return "FemCare backend is running!";
  };
}
