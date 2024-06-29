import { HttpException } from '@/exceptions/HttpException';
import { openAIHelper } from '@/server';
import { isBase64Image } from '@/utils/data';
import { Service } from 'typedi';

@Service()
export class OpenaiService {
  public async validateImage(image: string): Promise<unknown> {
    if (!isBase64Image(image)) throw new HttpException(400, 'Invalid image format');

    const prompt = `
                    Analyze the image provided. The image MUST satisfy all of the following criteria:
                        1. It must have as subject a form of proof of donation from an NGO or a charity.
                        2. It must not be a screenshot.
                        3. It must include the date of the purchase in Donation Date.
                        4. It must include the declared value of the donation.
                        5. The box for "Food described as" must be ticked and the description must be filled.
                    Please respond using a JSON object without comments and do not add any other descriptions and comments:
                    {
                    'validityFactor': number, // 0-1, 1 if it satisfies all the criteria, 0 otherwise
                    'descriptionOfAnalysis': string, // indicate your analysis of the image and why it satisfies or not the criteria. The analysis will be shown to the user so make them understand why the image doesn't satisfy the criteria if it doesn't without going into detail on exact criteria. Remember we are rewarding users for donation of food to the needy.
                    'donationValue': number, // the declared value of the donation
                    'donationDate': string, // the date of the donation, format: YYYY-MM-DD
                    'foodDescription': string, // the description of the food
                    }
                    `;

    const gptResponse = await openAIHelper.askChatGPTAboutImage({
      base64Image: image,
      prompt,
    });

    const responseJSONStr = openAIHelper.getResponseJSONString(gptResponse);

    return openAIHelper.parseChatGPTJSONString(responseJSONStr);
  }
}
