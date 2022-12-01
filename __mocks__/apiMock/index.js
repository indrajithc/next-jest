export const setupMocks = async () => {
  if (typeof window !== "undefined") {
    const { mswWorker } = await import("./mswWorker");
    mswWorker.start();
  } else {
    const { mswServer } = await import("./mswServer");
    mswServer.listen();
  }
};

export const dummy = null;
