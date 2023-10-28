import Api from "@/services/Api";
export default {
  index(search) {
    return Api().get("animalfoods");
  },
  show(animalfoodId) {
    return Api().get("animalfoods/" + animalfoodId);
  },
  post(animalfood) {
    return Api().post("animalfood", animalfood);
  },
  put(animalfood) {
    return Api().put("animalfoods/" + animalfood.id, animalfood);
  },
  delete(animalfood) {
    return Api().delete("animalfood/" + animalfood.id, animalfood);
  },
};