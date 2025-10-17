export async function fetchChihuahuaImage() {
  try {
    const response = await fetch('https://dog.ceo/api/breed/chihuahua/images/random');
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다.');
    }
    const data = await response.json();
    return data.message; // The API returns the URL in the 'message' field
  } catch (error) {
    console.error('이미지를 불러오는 중 오류가 발생했습니다:', error);
    return null;
  }
}
