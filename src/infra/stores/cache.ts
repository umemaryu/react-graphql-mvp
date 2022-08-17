import { InMemoryCache } from "@apollo/client";
import { timestampToDate } from "utils/timestampToDate";

export const cache = new InMemoryCache({
	typePolicies: {
		Post: {
			fields: {
				date: {
					read(_, opts) {
						const timestamp = (opts.readField("createdAt") as number) * 1000;
						const date = timestampToDate(timestamp);
						return date;
					},
				},
			},
		},
	},
});
