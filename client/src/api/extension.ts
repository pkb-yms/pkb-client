import { messageToExtension } from '@/types/extension.types';

/**
 * 피카북 익스텐션으로 토큰 전달
 * 익스텐션이 웹 스토어 배포되고 나면 아이디 값 바뀔 수 있으므로 주의
 */
function sendMessageToExtension(message: messageToExtension): void {
  // const extensionId = 'dfimdmhdpdgmkofepnddmdaobaoedcjo';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  chrome.runtime.sendMessage(message.extensionId, message.token);
}

export { sendMessageToExtension };
