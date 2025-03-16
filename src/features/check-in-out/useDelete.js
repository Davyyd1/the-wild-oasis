import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteBookings, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: () => {
      toast.success(`Booking  successfully deleted`);
      // queryClient.invalidateQueries({ active: true });
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: (err) => toast.err("There was an error while deleting"),
  });

  return { deleteBookings, isDeleting };
}
