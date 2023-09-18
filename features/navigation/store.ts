import create from "zustand";
import { Route } from "../../types/Route";

type State = {
  route: Route;
  setRoute: (route: Route) => void;
};

export const useNavigation = create<State>((set) => ({
  route: "home",
  setRoute: (route) => {
    set({ route });
  },
}));
