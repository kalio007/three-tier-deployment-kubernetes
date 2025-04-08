resource "aws_iam_role_policy_attachment" "iam-policy" {
  role = aws_iam_role.iam-role.name
  # Just for testing purpose
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}