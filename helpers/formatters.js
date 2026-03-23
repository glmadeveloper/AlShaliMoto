export const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    let cleaned = phoneNumber.toString().replace(/[^\d+]/g, "");
    if (cleaned.startsWith("+")) cleaned = cleaned.substring(1);

    if (cleaned.startsWith("971")) {
        const remaining = cleaned.substring(3);
        if (remaining.length === 8) {
            return `+971 ${remaining.slice(0, 1)} ${remaining.slice(1, 4)} ${remaining.slice(4)}`;
        } else if (remaining.length === 9) {
            return `+971 ${remaining.slice(0, 2)} ${remaining.slice(2, 5)} ${remaining.slice(5)}`;
        }
    }
    return "+" + cleaned;
};
