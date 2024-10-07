let isReloading = false; // Flaga do śledzenia, czy strona jest odświeżana

export const handlePageEvents = (action, func) => {
  const handleEvent = (event) => {
    // Obsługa zamykania strony
    if (event.type === "beforeunload") {
      if (!isReloading) {
        console.log("Strona jest zamykana");
        func();
      }
    }

    // Obsługa odświeżania strony (F5 lub Ctrl+R)
    if (event.type === "keydown") {
      if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
        isReloading = true; // Ustaw flagę na odświeżanie
      }
    }

    // Obsługa zmiany widoczności strony
    if (event.type === "visibilitychange") {
      if (document.visibilityState === "hidden") {
        // Resetujemy flagę, gdy strona staje się niewidoczna
        isReloading = false;
      }
    }
  };

  // Akcja 'add' - dodawanie nasłuchiwaczy, 'remove' - usuwanie
  if (action === "add") {
    window.addEventListener("beforeunload", handleEvent);
    window.addEventListener("keydown", handleEvent);
    document.addEventListener("visibilitychange", handleEvent);
  } else if (action === "remove") {
    window.removeEventListener("beforeunload", handleEvent);
    window.removeEventListener("keydown", handleEvent);
    document.removeEventListener("visibilitychange", handleEvent);
  }
};
