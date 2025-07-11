import {
  Button,
  FormikField,
  Input,
  Select,
} from "@canonical/react-components";
import { useMutation } from "@tanstack/react-query";
import { useSignForm } from "canonical-cla/contexts/SignForm";
import usePersistedForm from "canonical-cla/hooks/usePersistedForm";
import { formatAddress } from "canonical-cla/utils/address";
import { postOrganizationSignForm } from "canonical-cla/utils/api";
import { OrganizationSignForm } from "canonical-cla/utils/constants";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import GithubEmailSelector from "../GithubEmailSelector";
import LaunchpadEmailSelector from "../LaunchpadEmailSelector";

const OrganizationFormSchema = Yup.object<
  Omit<OrganizationSignForm, "agreement_type" | "address"> & {
    street_address: string;
    city: string;
    state_province?: string;
    postal_code: string;
    github_email?: string;
    launchpad_email?: string;
  }
>().shape({
  name: Yup.string().max(100).required().label("Organization name"),
  contact_name: Yup.string().max(100).required().label("Contact name"),
  contact_email: Yup.string()
    .max(100)
    .email()
    .required()
    .label("Contact email"),
  phone_number: Yup.string().max(20).required().label("Phone number"),
  street_address: Yup.string().max(200).required().label("Street address"),
  city: Yup.string().max(100).required().label("City"),
  state_province: Yup.string().max(100).label("State/Province"),
  postal_code: Yup.string().max(20).required().label("Postal/ZIP code"),
  country: Yup.string().required().label("Country"),
  email_domain: Yup.string().max(100).required().label("Email domain"),
  // used to choose the email domain and removed before submitting the form
  github_email: Yup.string().label("GitHub email"),
  launchpad_email: Yup.string().label("Launchpad email"),
});

const OrganizationContactForm = () => {
  const { changeStep } = useSignForm();
  const [storedValues, setStoredValues, resetStoredValues] =
    usePersistedForm<Yup.InferType<typeof OrganizationFormSchema>>(
      "organization-form",
    );
  const submitSignForm = useMutation({
    mutationFn: postOrganizationSignForm,
    onSuccess: () => {
      resetStoredValues();
      changeStep("success");
      window.location.hash = "main-content";
    },
  });
  const handleSubmit = (
    values: Yup.InferType<typeof OrganizationFormSchema>,
  ) => {
    const address = formatAddress({
      street_address: values.street_address,
      city: values.city,
      state_province: values.state_province,
      postal_code: values.postal_code,
      country: values.country,
    });
    const formData: OrganizationSignForm = {
      agreement_type: "organization",
      name: values.name,
      contact_name: values.contact_name,
      contact_email: values.contact_email,
      phone_number: values.phone_number,
      address,
      country: values.country,
      email_domain: values.email_domain,
    };
    submitSignForm.mutate(formData);
  };

  const getEmailDomain = (email?: string): string => {
    if (!email) {
      return "";
    }
    const domainPart = email.split("@")[1];
    if (!domainPart) {
      return "";
    }
    return domainPart.toLowerCase().trim();
  };

  return (
    <Formik
      initialValues={storedValues}
      validationSchema={OrganizationFormSchema}
      onSubmit={handleSubmit}
      validateOnMount
    >
      {({ isValid, values, setFieldValue }) => {
        setStoredValues(values);
        const email_domain = getEmailDomain(
          values.github_email || values.launchpad_email,
        );
        if (values.email_domain !== email_domain) {
          setFieldValue("email_domain", email_domain);
        }
        return (
          <Form>
            <FormikField
              component={Input}
              type="text"
              name="name"
              label="Organization name"
              required
              maxLength={100}
            />
            <FormikField
              component={Input}
              type="text"
              name="contact_name"
              label="Contact name"
              required
              maxLength={100}
            />
            <FormikField
              component={Input}
              type="text"
              required
              name="contact_email"
              label="Contact email"
              maxLength={100}
            />
            <FormikField
              component={Input}
              type="tel"
              required
              name="phone_number"
              label="Phone number"
              maxLength={20}
            />
            <FormikField
              component={Input}
              name="street_address"
              label="Street address"
              required
              type="text"
              maxLength={200}
            />

            <FormikField
              component={Input}
              name="city"
              label="City"
              required
              type="text"
              maxLength={100}
            />

            <FormikField
              component={Input}
              name="state_province"
              label="State/Province"
              type="text"
              maxLength={100}
            />
            <FormikField
              component={Input}
              name="postal_code"
              label="Postal/ZIP code"
              required
              type="text"
              maxLength={20}
            />
            <FormikField
              component={Select}
              required
              label="Country/Region"
              name="country"
              defaultValue={""}
              options={[
                { label: "Choose a country/region", value: "", disabled: true },
                ...window.COUNTRIES_LIST.map((country) => ({
                  label: country.name,
                  value: country.alpha2,
                })),
              ]}
            />
            <div>
              <label className="p-form__label is-required">Email domain</label>
              <p className="p-form-help-text">
                Login with GitHub or Launchpad to choose the email domain of the
                contributors in your organization.
              </p>
              <div className="row p-divider">
                <div className="col-4 p-divider__block u-vertically-center">
                  <GithubEmailSelector />
                </div>

                <div className="col-4 p-divider__block u-vertically-center">
                  <LaunchpadEmailSelector />
                </div>
              </div>
              <FormikField
                component={Input}
                type="text"
                required
                readOnly
                name="email_domain"
                maxLength={100}
                value={getEmailDomain(
                  values.github_email || values.launchpad_email,
                )}
                help="By filling this field, you are signing a Contributor License Agreement for an entire domain.  Please ensure you have your organization's approval  before submitting this form."
              />
            </div>

            {submitSignForm.isError && (
              <div className="p-form__control is-error">
                <p className="p-form-validation__message">
                  {submitSignForm.error.message}
                </p>
              </div>
            )}
            <p>
              By clicking ‘Request contributor agreement’ below you are
              confirming that you accept the terms detailed above.
            </p>
            <Button
              type="submit"
              appearance="positive"
              disabled={!isValid || submitSignForm.isPending}
            >
              {submitSignForm.isPending
                ? "Loading..."
                : "Request contributor agreement"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OrganizationContactForm;
