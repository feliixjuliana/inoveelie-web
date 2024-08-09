import { toast } from "react-toastify";

export const notify = (mensagem) => toast(mensagem, { position: "center" });

export const notifyInfo = (mensagem) => toast.info(mensagem, { position: "center" });

export const notifyWarn = (mensagem) => toast.warn(mensagem, { position: "center" });

export const notifySuccess = (mensagem) => toast.success(mensagem, { position: "center" });

export const notifyError = (mensagem) => toast.error(mensagem, { position: "center" });
