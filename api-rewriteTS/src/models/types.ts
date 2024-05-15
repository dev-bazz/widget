export interface ResponseBody {
  status: (arg0: number) => {
    (): any;
    new (): any;
    send: {
      (arg0: {
        status: string;
        message?: string;
        data: Promise<void> | { error: any } | { error: string };
      }): void;
      new (): any;
    };
  };
}

export interface RequestBody {
  body: {
    name: string;
    email: string;
    message?: string;
  }
}

export interface NewRecord {
  name: string;
  email: string;
  message?: string;
  sex?: boolean;
}
