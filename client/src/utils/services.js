export const baseUrl = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
  console.log("url", url);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();
  if (!response.ok) {
    let message;

    if (data?.error) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }

  return data;
};
